const renderView = (res, view, options = {})=>{
     res.render ('index', {content: view, ... options});
}

module.exports = (renderView)