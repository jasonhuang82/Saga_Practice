var todos = require('./todos.json');
var visibilityFilter = require('./visibilityFilter.json');

module.exports = function(){
    return {
        ...todos,
        ...visibilityFilter,
    };
}