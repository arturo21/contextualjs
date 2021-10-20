import VanillaContextMenu from 'vanilla-context-menu';
let settings=[{}];
let menus=[{}];

let contextual=(function(global,factory){

	return {
		config:function(defaults){
			if(defaults.tag==undefined || defaults.tag==''){
				console.log("Defina el atributo tag!");
			}
			if(defaults.menu==undefined){
				console.log("Defina el atributo element!");
			}
			else{
				if(defaults.tag==undefined || defaults.tag==''){
					defaults.tag="contextual-menu-dev";
				}
				settings=defaults;
				new VanillaContextMenu({
				  scope: g(defaults.tag).getEl(),
				  menuItems: defaults.menu,
				  customThemeClass: 'context-menu-orange-theme',
				  customClass: 'custom-context-menu-cls'
				});
			}
			return this;
		}
	}
}(window,document));

export {contextual}
