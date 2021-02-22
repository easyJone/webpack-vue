const glob = require('glob')
module.exports = {
  getPages: () => {
    const pages = {}
    glob.sync('./src/pages/*/*.js').forEach(filePath => {
      const fileList = filePath.split('/')
      const filename = fileList[fileList.length - 2]
      pages[filename] = {
        entry: `src/pages/${filename}/${filename}.js`,
        template: `src/pages/${filename}/${filename}.html`,
        filename: process.env.NODE_ENV === 'development' ? `${filename}.html` : `${filename}/${filename}.html`,
        title: filename,
        chunk: ['chunk-vendors', 'chunk-common', filename]
      }
    })
    return pages
  }
}