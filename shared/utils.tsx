import fs from 'fs';
import path from "path";

export function getPostList() {
  try {
    const postDir = path.join(process.cwd(), 'pages/post');

    return fs
      .readdirSync(postDir)
      .map(filename => (
        filename.substring(0, filename.indexOf('.'))
      ))
  } catch {

    console.warn('opa... não encontramos nenhum post...');
    return []
  }
}