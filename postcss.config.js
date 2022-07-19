import csso from 'postcss-csso';

const plugins = [
  csso({
    restructure: false
  })
]

export default plugins
