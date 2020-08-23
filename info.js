const Discord = require('discord.js'); //le module est inclu dans le zip, évitez de le réinstaller car j'y ai apporté qlqs modifications
const chalk = require('chalk');

const bot = new Discord.Client();
let token = process.argv[2];

bot.login(token).catch(console.error);



bot.on("ready", () => {
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
	console.log("Informations");
	console.log('-------------------------------------------------------------------');
	console.log("Pseudo : " + bot.user.tag);
	console.log("ID : " + bot.user.id);
	console.log("Token : " + `"${bot.token}"`);
	let guildsAdmin = bot.guilds.filter(guild => guild.me.hasPermission('ADMINISTRATOR'));
	if (bot.user.bot) {
		
		bot.fetchApplication().then(application => {
			console.log("Bot : oui");
			let name = 'jsp',
				description = 'jsp';
			application.name ? name = application.name : name = 'Cette application ne possède pas de nom';
			application.description ? description = application.description : description = 'aucune';
			
			console.log("Nombre de serveurs sur lesquels le bot est : " + bot.guilds.size);
			console.log("   Avec les perms admin : " + guildsAdmin.size);
			console.log('-------------------------------------------------------------------');
			console.log("Informations de l'application :");
			console.log("   Nom : " + name);
			console.log("   Description : " + description);
			console.log("   Créateur : " + application.owner.tag + " ("+application.owner.id+")");
			console.log('-------------------------------------------------------------------');
			if (bot.guilds.size > 0) console.log("Serveurs :");
			bot.guilds.forEach(guild => {
				
				let admin = 'jsp',
					text = guild.name + " (" + guild.id + "), " + guild.memberCount + " membres";
				
				if (guild.me.hasPermission('ADMINISTRATOR')) {
					admin = 'oui';
					let channels = guild.channels.filter(channel => channel.type === 'text');
					channels.first().createInvite({
						//https://discord.js.org/#/docs/main/stable/class/TextChannel?scrollTo=createInvite
						temporary: false, //Membre provisoire ? (actuellement false, donc non)
						maxAge: 0, //Expire après (en secs, 0 pour jamais)
						maxUses: 0, //Nombre maximum d'utilisations (0 pour infini)
						unique: false //Si y a déjà une invite avec les même paramètres, le bot créé quand même une nouvelle invite ? (actuellement flse, donc non)
					}).then(invite => {
						text = text + ", admin : " + admin + "\nLien : " + invite.url;
						console.log(text);
						console.log('-------------------------------------------------------------------');
					}).catch(console.error);
				} else if (guild.me.hasPermission('CREATE_INSTANT_INVITE')) {
					admin = 'non';
					let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(bot.user.id).has('CREATE_INSTANT_INVITE'));
					let channel = channels.first();
					
					///faudrait faire le code pour vérifier si le bot a la perm de créer des invites pour ce channel précisément (j'ai essayé des trucs mais ils marchent pas (https://discord.js.org/#/docs/main/master/class/TextChannel?scrollTo=permissionsFor))
					
					channel.createInvite({
						//Y a d'jà des explication en haut
						temporary: false,
						maxAge: 0,
						maxUses: 0,
						unique: false
					}).then(invite => {
						text = text + ", admin : " + admin + "\nLien : " + invite.url;
						console.log(text);
						console.log('-------------------------------------------------------------------');
					}).catch(console.error);
				} else {
					admin = 'non';
					text = text + ", admin : " + admin;
					console.log(text);
					console.log('-------------------------------------------------------------------');
				}
				
			});
		}).catch(console.error);
		
	} else {
		
		console.log("Bot : non");
		console.log("Nombre de serveurs sur lesquels l'utilisateur est : " + bot.guilds.size);
		console.log("   Avec les perms admin : " + guildsAdmin.size);
		console.log('-------------------------------------------------------------------');
		let A2F = 'jsp',
			phone = 'jsp',
			emailVerified = 'jsp',
			nitro = 'jsp';
		bot.user.mfaEnabled ? A2F = 'oui' : A2F = 'non';
		bot.user.phone ? phone = bot.user.phone : phone = 'aucun';
		bot.user.verified ? emailVerified = 'oui' : emailVerified = 'non';
		bot.user.premium ? nitro = 'oui' : nitro = 'non';
		
		console.log("Email : "+bot.user.email);
		console.log("  Vérifiée : "+emailVerified);
		console.log("Double authentification activée : "+A2F);
		console.log("Numéro de téléphone associé au compte : "+phone);
		console.log("Nitro : "+nitro);
		console.log('-------------------------------------------------------------------');
		try {
			bot.user.fetchProfile().then(profil => {
				if (profil.connections.size > 0) console.log("Connections :");
				profil.connections.forEach(connection => {
					console.log("Plateforme : "+connection.type+"\nPseudo : "+connection.name+" ("+connection.id+")");
					console.log('-------------------------------------------------------------------');
				});
			});
		} catch(e) {}
	}
});





