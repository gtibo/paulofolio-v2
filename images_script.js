import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import getMediaDimensions from 'get-media-dimensions';

let projects_directory = './static/content/projects';
var projects_list = fs.readdirSync(path.resolve(projects_directory));

projects_list.map(project_name => {
  var project_path = path.join(projects_directory, project_name);
  var thumbnail_file_name = fs.readdirSync(project_path).find(file_name => file_name.includes("thumbnail"));
  var media_directory_path = path.join(project_path, "medias");
  
  set_media_meta(path.resolve("./static/content/demo_reel.mp4"));
  set_media_meta(path.resolve("./static/content/vignette_demo_reel.jpg"));

  set_media_meta(path.resolve(project_path, thumbnail_file_name), {
      crop_ratio : 0.8 / 1.0,
      breakpoints: [
        {name: "sm", width: 320},
        {name: "lg", width: 540}
      ]
  });

  recursive_search(media_directory_path)
    .forEach(media_path => {
      set_media_meta(media_path, {
        // forced ratio : 1/1
        breakpoints: [
          {name: "sm", width: 512},
          {name: "md", width: 760},
          {name: "lg", width: 1280}
        ]
    })
    }
    );
});

/** Create meta data for a media file */

async function set_media_meta(media_path, options = {}) {
  let media_extension = path.extname(media_path).replace(".", "").toLowerCase();
  let media_type = watdat(media_extension);
  if (media_type == null) return;

  let meta_file_name = `${path.relative("./static/content/", media_path).replaceAll(path.sep, "_")}.json`;
  let meta_location_path = path.resolve("./static/metas", meta_file_name);

  // Skip if media is older than already existing meta data
  let already_have_meta = fs.existsSync(meta_location_path);

  if (already_have_meta &&
    new Date(fs.statSync(meta_location_path).mtime) >
    new Date(fs.statSync(media_path).mtime)) return;

  let media_dimensions = await getMediaDimensions(media_path, media_type);
  let media_base_ratio = media_dimensions.width / media_dimensions.height;

  let meta_data = {
    extension: media_extension,
    type: media_type,
    base_ratio: media_base_ratio,
    base_path: path.relative("./static", media_path)
  };

  switch (media_type) {
    case "image":
      // Resize image in the option format
      if (options["breakpoints"] && media_extension != "svg") {
        meta_data.formats = {
          ratio: options.crop_ratio || media_base_ratio,
          // Path to resized formats
          sizes: []
        };

        options.breakpoints.forEach(bpoint => {
          let resized_media_name = `${bpoint.name}-${path.relative(projects_directory, media_path ).replaceAll(path.sep, "_")}`;
          let relative_path = path.join("./resized_images", resized_media_name);
          let destination_path = path.resolve("./static/resized_images", resized_media_name);

          meta_data.formats.sizes.push(
            {name:bpoint.name, width: bpoint.width, path: relative_path}
          );
          let resized_height = options.crop_ratio == undefined ? undefined : bpoint.width / options.crop_ratio;
          
          sharp(media_path).resize({
            width: bpoint.width,
            height: resized_height
          }).toFile(destination_path);

        });
      }
      break;
    case "video":
      meta_data.duration = media_dimensions.duration;
      break;
  }

  // Write meta to file
  fs.writeFileSync(meta_location_path, JSON.stringify(meta_data));
}

/** Returns list of every files recursively from a base directory */

function recursive_search(base_path) {

  let to_explore = [];
  let result = [];
  to_explore.push(path.resolve(base_path));

  while (to_explore.length != 0) {
    let current_path = to_explore[0];
    let files = fs.readdirSync(to_explore[0]);
    to_explore.shift(0);
    for (var i = files.length - 1; i >= 0; i--) {
      let file = files[i],
        file_path = path.join(current_path, file),
        is_dir = fs.statSync(file_path).isDirectory();
      if (is_dir) {
        to_explore.push(file_path);
        continue;
      }
      result.push(file_path);
    }
  }
  return result;
}

function watdat(extension) {
  extension = extension.replace(".", "").toLowerCase();
  let formats = {
    'video': 'mp4|webm',
    'image': 'png|jpeg|jpg|webp|gif|svg',
  }
  for (var type in formats) {
    let f = new RegExp(formats[type], 'g');
    if (extension.match(f)) return type;
  }
  return null;
}