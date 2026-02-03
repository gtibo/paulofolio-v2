import { error } from '@sveltejs/kit';
import { readMD, parseJSON } from '$lib/md_util.js';
import { marked } from 'marked';
import path from 'path';

let project_source_dir = './static/content/projects/';
let metas_source_dir = './static/metas';

export function load({ params }) {

    try {
        const project_data = readMD(path.resolve(project_source_dir, params.slug, "content.md"));
        let banner_data = parseJSON(path.resolve(metas_source_dir, "projects_" + params.slug + "_" + project_data.banner.replaceAll("/", "_") + ".json"));
        project_data.banner = banner_data;

        // Parse project_data
        project_data.body = parse_content(project_data.body, params.slug);

        return project_data;
    } catch (e) {   
        error(404, 'Not found');
    }
}

function parse_content(source, project_slug){

    let blocks = source.split("\n").filter(block => block != "");

    let parsed_content = [];

    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        
        if(block.charAt(0) == "!"){
            let meta_file_name = "projects_" + project_slug + "_" + block.replace("!", "").trim().replaceAll("/", "_") + ".json";
            parsed_content.push(parseJSON(path.resolve(metas_source_dir, meta_file_name)));
            continue;
        }

        if(block.startsWith(" ")){
            let [attribute, ...rest] = block.split(':');
            let value = rest.join(':').trim();

            if(attribute.trim() == "vignette"){
                let meta_file_name = "projects_" + project_slug + "_" + value.replaceAll("/", "_") + ".json";
                value = parseJSON(path.resolve(metas_source_dir, meta_file_name));
            }

            parsed_content[parsed_content.length - 1][attribute.trim()] = value;
            continue;
        }

        // Fall back on markdown by default

        parsed_content.push({
            type: "html",
            content: marked.parse(block)
        });
        
    }

    return parsed_content;
}