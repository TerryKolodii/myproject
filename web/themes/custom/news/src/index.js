import Post from './Post'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
// import './styled/styles.css'
// import './styled/scss.scss'


const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String:', post.toString())

console.log('JSON:',json)
const sample = () => {
  console.log(111564)
}
