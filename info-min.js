const Discord=require("discord.js"),
 chalk = require('chalk'),

bot=new Discord.Client;
let token=process.argv[2];
bot.login(token).catch(console.error),
bot.on("ready",()=>{
    console.log("");                                  
    console.log((chalk.cyan(`                           #####                                     ###                       #####                     `)));
    console.log((chalk.cyan(`                          #     #   ##   #        ##    ####  #    #  #  #    # ######  ####  #     # #####    ##   #####`)));
    console.log((chalk.cyan(`                          #        #  #  #       #  #  #    # #   #   #  ##   # #      #    # #       #    #  #  #  #    #`)));
    console.log((chalk.cyan(`                          #  #### #    # #      #    # #      ####    #  # #  # #####  #    # #  #### #    # #    # #####`)));
    console.log((chalk.cyan(`                          #     # ###### #      ###### #      #  #    #  #  # # #      #    # #     # #####  ###### #    #`)));
    console.log((chalk.cyan(`                          #     # #    # #      #    # #    # #   #   #  #   ## #      #    # #     # #   #  #    # #    #`)));
    console.log((chalk.cyan(`                           #####  #    # ###### #    #  ####  #    # ### #    # #       ####   #####  #    # #    # #####`)));
    console.log("");                                  
    console.log((chalk.yellow(`                                                               Crée par GalackQSM#7926 !`)));  
    console.log((chalk.yellow(`                                                                © 2020 GalackQSM, Inc.`))); 
    console.log("");                                   
    console.log((chalk.red(`                                                         Discord: https://discord.gg/XH7zQ8s`)));   
    console.log((chalk.red(`                                                       Twitter: https://twitter.com/Galack_QSM`)));   
    console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));   
    console.log((chalk.red(`                                                        Youtube: https://youtube.com/GalackQSM`)));   
    console.log("");                                  
    console.log("");                                   
	console.log('-------------------------------------------------------------------');
	console.log("Informations du compte");
	console.log("-------------------------------------------------------------------"),
	console.log("Pseudo : "+bot.user.tag),
	console.log("ID : "+bot.user.id),
	console.log("Token : "+`"${bot.token}"`);
	let o=bot.guilds.filter(o=>o.me.hasPermission("ADMINISTRATOR"));
	if(bot.user.bot)bot.fetchApplication().then(e=>{
		console.log("Bot : oui");
		let s="jsp",n="jsp";s=e.name?e.name:"Cette application ne possède pas de nom",
		n=e.description?e.description:"aucune",
		console.log("Nombre de serveurs sur lesquels le bot est : "+bot.guilds.size),
		console.log("Avec les perms admin : "+o.size),
		console.log("-------------------------------------------------------------------"),
		console.log("Informations de l'application :"),
		console.log("Nom : "+s),
		console.log("Description : "+n),
		console.log("Créateur : "+e.owner.tag+" ("+e.owner.id+")"),
		console.log("-------------------------------------------------------------------"),bot.guilds.size>0&&
		console.log("Serveurs :"),bot.guilds.forEach(o=>{
			let e="jsp",s=o.name+" ("+o.id+"), "+o.memberCount+" membres"
			;if(o.me.hasPermission("ADMINISTRATOR")){e="oui",o.channels.filter(o=>"text"===o.type).first().createInvite({temporary:!1,maxAge:0,maxUses:0,unique:!1}).then(o=>{s=s+", admin : "+e+"\nLien : "+o.url,
				console.log(s),
				console.log("-------------------------------------------------------------------")}).catch(console.error)}else if(o.me.hasPermission("CREATE_INSTANT_INVITE")){e="non",o.channels.filter(o=>"text"===o.type&&o.permissionsFor(bot.user.id).has("CREATE_INSTANT_INVITE")).first().createInvite({temporary:!1,maxAge:0,maxUses:0,unique:!1}).then(o=>{s=s+", admin : "+e+"\nLien : "+o.url,console.log(s),console.log("-------------------------------------------------------------------")}).catch(console.error)}else s=s+", admin : "+(e="non"),console.log(s),console.log("-------------------------------------------------------------------")})}).catch(console.error);else{console.log("Bot : non"),console.log("Nombre de serveurs sur lesquels l'utilisateur est : "+bot.guilds.size),console.log("Avec les perms admin : "+o.size),console.log("-------------------------------------------------------------------");let e="jsp",s="jsp",n="jsp",l="jsp";e=bot.user.mfaEnabled?"oui":"non",s=bot.user.phone?bot.user.phone:"aucun",n=bot.user.verified?"oui":"non",l=bot.user.premium?"oui":"non",console.log("Email : "+bot.user.email),console.log("Compte vérifiée : "+n),console.log("Double authentification activée : "+e),console.log("Numéro de téléphone associé au compte : "+s),console.log("Nitro : "+l),console.log("-------------------------------------------------------------------");try{bot.user.fetchProfile().then(o=>{o.connections.size>0&&console.log("Connections :"),o.connections.forEach(o=>{console.log("Plateforme : "+o.type+"\nPseudo : "+o.name+" ("+o.id+")"),console.log("-------------------------------------------------------------------")})})}catch(o){}}});
