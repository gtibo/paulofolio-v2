import { error } from '@sveltejs/kit';
import { readMD, fileList, parseJSON} from '$lib/md_util.js';
import path from 'path';

export function load({}) {
  let content_source_dir = './static/content';
  let metas_source_dir = './static/metas';
  // Get website home page data from info.md
  const data = readMD(path.resolve(content_source_dir, "info.md"));
  // Get website demo reel video
  data.demo_reel = parseJSON(path.resolve(metas_source_dir, "demo_reel.mp4.json"));
  // Get website home page projects info
  // List of projects with title, types, vignettes and slug
  let project_source_dir = path.resolve(content_source_dir, "projects");

  data.projects_list = fileList(project_source_dir).map(slug => {
    let project_data_file_path = path.resolve(project_source_dir, slug, "content.md");
    let project_data = readMD(project_data_file_path, ["title", "type", "vignette"]);
    project_data.slug = slug;
    let vignette_data = parseJSON(path.resolve(metas_source_dir, "projects_" + project_data.slug + "_" + project_data.vignette + ".json"))
    project_data.vignette = vignette_data;
    return project_data;
  });

  return data;
}
