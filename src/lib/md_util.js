import { marked } from 'marked';
import fm from 'front-matter';
import path from 'path';
import fs from 'fs';

export function parseJSON(source_path){
  const raw = fs.readFileSync(source_path, {encoding:'utf8'});
  return JSON.parse(raw);
}

/** Returns a list of all the files insie a directory. 
 * @param {string} source path to the targeted directory.
 * @returns {Array<String>} Array of files name
*/

export function fileList(source){
  const source_path = path.resolve(source);
  /** @type {Array<String>} */
  let list = fs.readdirSync(source_path);
  return list;
}

/** Extract every parameters from a markdown file. 
 * @param {string} source path to the targeted markdown file.
 * @param {Array<String>} pick List of properties to pick from Markdown file.
*/

export function readMD(source, pick = []){
  const source_path = path.resolve(source);
  const raw = fs.readFileSync(source_path, {encoding:'utf8'});
  const data = fm(raw);

  let result = data.attributes;
  result.body = data.body;

  // If filter
  if(pick.length > 0){
    return Object.fromEntries(
      pick.map(key => [key, result[key]])
    );    
  }

  return result;
}
