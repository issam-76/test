Ext.define('SlideNav.view.Main', {
				extend: 'Ext.TabPanel',
				xtype: 'main',
				config: {
								tabBarPosition : 'bottom',
								items : [{
			 title: 'Hem',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                 

                html: [
                     '<img  src="resources/icons/logo.png" />',
                        '<h1>Välkommen</h1>',
                        "<p>Vi grundades 2005 och är specialiserade på Läcksökning , skadeorsaksutredning och termografering med över 50 års samlad erfarenhet av branschen. Bland våra kunder finns bland andra försäkringsbolag, förvaltningsbolag, bostadsrättsföreningar, energiverk och privatpersoner.</p>",
                       
                ].join("") 
				
				
				 
						 			
            },
             // This is the home page, just some simple html
                {
                title: 'Webb',
                iconCls: 'browser',
id: 'feedTab',
	 		scroll : false,
                 

              
                 

                 xtype: 'panel',
    styleHtmlContent : true,

                html: '<div style="height: 100%;"><iframe style="width:100%;height:100%;" src="http://www.lacksokning.com/">Your device does not support iframes.</iframe></div>',
            },
			{
                title: 'Tjänster',
                iconCls: 'settings2',

                styleHtmlContent: true,
                scrollable: true,

                

                html: [
                     '<div style="width:100%;margin-left: 15px;"><div style="width:33%; float:left;"><img  src="resources/icons/1.png" /><p style="font-size:0.8em;">Läcksökning</p></div><div style="width:33%; float:left;"><img  src="resources/icons/4.png" /><p style="font-size:0.8em;">Fuktmätning</p></div><div style="width:33%; float:right;"><img  src="resources/icons/3.png" /><p style="font-size:0.8em;">Fuktutredning</p></div></div>',
                      
                        "",
                       
                ].join(""),
				
				
          items : [{
																xtype : 'titlebar',
																title : 'Tjanster',
																docked : 'top',
																 
																items :[{
																				align : 'left',
																				name : 'nav_btn',
																				iconCls : 'list',
																				ui : 'plain'
																}]
												}]
						 			
												
												
												
												
												
												
												
												
												
								}]
				}
});
