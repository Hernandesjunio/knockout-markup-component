var paths =  {
    'domReady': '/Scripts/vendor/domReady',
        'text': '/scripts/vendor/text',
        'modal-component': '/Scripts/components/modal-component',
        'sub-component': '/Scripts/components/sub-component',
        'sub-component-tmpl': '/Content/templates/sub-component-tmpl.html',
        'modal-component-tmpl': '/Content/templates/modal-component-tmpl.html'
};

for( var p in paths){
    paths[p] = uriVirtualPath + paths[p];
}

require.config({
    baseUrl: '/Scripts',
    paths: paths
});