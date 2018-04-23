
var languageFull = navigator.language.replace("-","_");
var languageMain = navigator.language.substring(0,2);
var languageFallback = "en";

var customLanguageData = {
	"TweetDeck Settings":{
		en:"TweetDeck Settings",
		es:"Ajustes TweetDeck"
	},
	"Better TweetDeck Settings":{
		en:"Better TweetDeck Settings",
		es:"Ajustes Better TweetDeck"
	},
	"ModernDeck Settings":{
		en:"ModernDeck Settings",
		es:"Ajustes ModernDeck"
	},
	"Add Column":{
		en:"Add Column",
		es:"Añadir Columna"
	},
	"Sign Out":{
		en:"Sign Out",
		es:"Cerrar Sesión"
	},
	"Theme":{
		en:"Theme",
		es:"Tema"
	},
	"About":{
		en:"About",
		es:"Sobre"
	},
	"ModernDeck":{
		en:"ModernDeck",
		es:"ModernDeck"
	},
	"Accessibility":{
		en:"Accessibility",
		es:"Accesibilidad"
	},
	"Appearance":{
		en:"Appearance",
		es:"Apariencia"
	},
	"Preferences":{
		en:"Preferences",
		es:"Preferencias"
	},
	"Your Accounts":{
		en:"Your Accounts",
		es:"Tus Cuentas"
	},
	"Send Feedback":{
		en:"Send Feedback",
		es:"Enviar Feedback"
	},
	"Font size":{
		en:"Fonts",
		es:"Fuentes"
	},
	"Keyboard Shortcuts":{
		en:"Keyboard Shortcuts",
		es:"Atajos de Teclado"
	},
}

var languageData = {
	"":{
		en:"",
		es:""
	},
	"GIF":{
		en:"GIF",
		es:"GIF"
	},
	"Poll":{
		en:"Poll",
		es:"Encuenta"
	},
	"Choose a column type to add":{
		en:"Choose a column type to add",
		es:"Elegir un tipo de columna para añadir"
	},
	"You have already added this column":{
		en:"You have already added this column",
		es:"Ya ha agregado esta columna"
	},
	"Back":{
		en:"Back",
		es:"Volver"
	},
	"Accessing direct messages":{
		en:"Accessing direct messages",
		es:"Acceder mensajes directos"
	},
	"Continue":{
		en:"Continue",
		es:"Continuar"
	},
	"Team members":{
		en:"Team members",
		es:"Miembros del equipo"
	},
	"Change role":{
		en:"Change role",
		es:"Cambiar rol"
	},
	"Read more about teams.":{
		en:"Read more about teams.",
		es:"Lea más sobre los equipos."
	},
	"Warning: You will no longer be able to manage the team from this TweetDeck":{
		en:"Warning: You will no longer be able to manage the team from this TweetDeck",
		es:"Advertencia: Ya no podrás administrar el equipo desde este TweetDeck"
	},
	"Authorize":{
		en:"Authorize",
		en_GB:"Authorise",
		es:"Autorizar"
	},
	"Liking and Retweeting":{
		en:"Liking and Retweeting",
		es:"Hacer Me Gusta y Retweetear"
	},
	"Accessing direct message":{
		en:"Accessing direct message",
		es:"Acceder al mensaje directo"
	},
	"Posting Tweets":{
		en:"Posting Tweets",
		es:"Publicar Tweets"
	},
	"This user will be able to use Twitter as @{{contributee.getUsername}}, including:":{
		en:"This user will be able to use Twitter as @{{contributee.getUsername}}, including:",
		es:"Este usuario podrá usar Twitter como @{{contributee.getUsername}}, que incluye:"
	},
	"You are signed in as @{{user.screenName}}, so this will remove @{{contributee.getUsername}} from your TweetDeck and you will no longer be able to manage the team.":{
		en:"You are signed in as @{{user.screenName}}, so this will remove @{{contributee.getUsername}} from your TweetDeck and you will no longer be able to manage the team.",
		es:"Has iniciado sesión como @{{user.screenName}}, por lo que eliminarás @{{contributee.getUsername}} de tu TweetDeck y ya no podrás administrar el equipo."
	},
	"Admin":{
		en:"Admin",
		es:"Administrador"
	},
	"Remove @{{user.screenName}} from the team?":{
		en:"Remove @{{user.screenName}} from the team?",
		es:"¿Elimimar @{{user.screenName}} del equipo?"
	},
	"Remove from team":{
		en:"Remove from team",
		es:"Eliminar del equipo"
	},
	"Confirm":{
		en:"Confirm",
		es:"Confirmar"
	},
	"Can Tweet and manage team":{
		en:"Can Tweet and manage team",
		es:"Puede Tweetear y administrar el equipo"
	},
	"Contributor":{
		en:"Contributor",
		es:"Contribuidor"
	},
	"Pending requests":{
		en:"Pending requests",
		es:"Solicitudes pendientes"
	},
	"What's happening?":{
		en:"What's happening?",
		es:"¿Qué esta pasando?"
	},
	"Retweet":{
		en:"Retweet",
		es:"Retweetear"
	},
	"Retweet with comment":{
		en:"Retweet with comment",
		es:"Retweetear con comentario"
	},
	"Create new list":{
		en:"Create new list",
		es:"Crear lista nueva"
	},
	"Create list":{
		en:"Create list",
		es:"Crear lista"
	},
	"from":{
		en:"from",
		es:"de"
	},
	"Linking another account here will add":{
		en:"Linking another account here will add",
		es:"Enlazando otra cuenta va a añadir"
	},
	"as a contributor to that account, with admin privileges.":{
		en:"as a contributor to that account, with admin privileges.",
		es:"como colaborador de la cuenta, con privilegios administrativos."
	},
	"This means that when you or anyone else logs in to TweetDeck, Twitter for iOS or Twitter for Android as":{
		en:"This means that when you or anyone else logs in to TweetDeck, Twitter for iOS or Twitter for Android as",
		es:"Esto significa que cada vez que tú o cualquier otra persona inicia sesión en TweetDeck, Twitter para iOS o Twitter para Android como"
	},
	"in the future, they will be able to take actions on behalf of the account you link here, as well as view and manage other team members.":{
		en:"in the future, they will be able to take actions on behalf of the account you link here, as well as view and manage other team members.",
		es:"en el futuro, el(la) podrá para tomar acciones en nombre de la cuenta que vinculas aquí, así como ver y administrar otros miembros del equipo."
	},
	"If you are trying to join a shared account as a team member, ask an admin for the account to invite you as a team member instead of completing this action.":{
		en:"If you are trying to join a shared account as a team member, ask an admin for the account to invite you as a team member instead of completing this action.",
		es:"Si estás intentando unirse a una cuenta compartida como miembro del equipo, preguntas a un administrador por la cuenta para invitarte como miembro de equipo en lugar de completar esta acción."
	},
	"Learn more about teams":{
		en:"Learn more about teams",
		es:"Aprender más sobre los equipos"
	},
	"Learn more":{
		en:"Learn more",
		es:"Aprender más"
	},
	"Terms of Service":{
		en:"Terms of Service",
		es:"Términos de Servicio"
	},
	"Privacy Policy":{
		en:"Privacy Policy",
		es:"Política de Privacidad"
	},
	"Liked":{
		en:"Liked",
		es:"Te Ha Gustado"
	},
	"Unlike":{
		en:"Unlike",
		es:"Deshacer Me Gusta"
	},
	"Like":{
		en:"Like",
		es:"Me Gusta"
	},
	"Enter Tweet URL":{
		en:"Enter Tweet URL",
		es:"Entrar URL de Tweet"
	},
	"Filter error":{
		en:"Filter error",
		es:"Error de filtro"
	},
	"Search":{
		en:"Search",
		es:"Buscar"
	},
	"now":{
		en:"now",
		es:"ahora"
	},
	"All accounts":{
		en:"All accounts",
		es:"Todas las cuentas"
	},
	"Monday":{
		en:"Monday",
		es:"Lunes"
	},
	"Tuesday":{
		en:"Tuesday",
		es:"Martes"
	},
	"Wednesday":{
		en:"Wednesday",
		es:"Miércoles"
	},
	"Thursday":{
		en:"Thursday",
		es:"Jueves"
	},
	"Friday":{
		en:"Friday",
		es:"Viernes"
	},
	"Saturday":{
		en:"Saturday",
		es:"Sábado"
	},
	"Sunday":{
		en:"Sunday",
		es:"Domingo"
	},
	"Mon":{
		en:"Mon",
		es:"Lun"
	},
	"Tue":{
		en:"Tue",
		es:"Mar"
	},
	"Wed":{
		en:"Wed",
		es:"Mie"
	},
	"Thu":{
		en:"Thu",
		es:"Jue"
	},
	"Fri":{
		en:"Fri",
		es:"Vie"
	},
	"Sat":{
		en:"Sat",
		es:"Sab"
	},
	"Sun":{
		en:"Sun",
		es:"Dom"
	},
	"Jan":{
		en:"Jan",
		es:"Ene",
		jp:"1"
	},
	"Feb":{
		en:"Feb",
		es:"Feb",
		jp:"2"
	},
	"Mar":{
		en:"Mar",
		es:"Mar",
		jp:"3"
	},
	"Apr":{
		en:"Apr",
		es:"Abr",
		jp:"4"
	},
	"May":{
		en:"May",
		es:"May",
		jp:"5"
	},
	"Jun":{
		en:"Jun",
		es:"Jun",
		jp:"6"
	},
	"Jul":{
		en:"Jul",
		es:"Jul",
		jp:"7"
	},
	"Aug":{
		en:"Aug",
		es:"Ago",
		jp:"8"
	},
	"Sep":{
		en:"Sep",
		es:"Sep",
		jp:"9"
	},
	"Oct":{
		en:"Oct",
		es:"Oct",
		jp:"10"
	},
	"Nov":{
		en:"Nov",
		es:"Nov",
		jp:"11"
	},
	"Dec":{
		en:"Dec",
		es:"Dic",
		jp:"12"
	},
	"{{month}} {{day}}":{
		en:"{{month}} {{day}}",
		en_GB:"{{day}} {{month}}",
		es:"{{day}} {{month}}"
	},
	"{{hours12}}:{{minutes}} {{amPm}}, {{day}} {{month}} {{fullYear}}":{
		en:"{{hours12}}:{{minutes}} {{amPm}}, {{day}} {{month}} {{fullYear}}",
		es:"{{hours12}}:{{minutes}} {{amPm}}, {{day}} {{month}} {{fullYear}}"
	},
	"{{day}} {{month}} {{fullYear}}":{
		en:"{{day}} {{month}} {{fullYear}}",
		es:"{{day}} {{month}} {{fullYear}}"
	},
	"{{hours12}}:{{minutes}}{{amPm}}":{
		en:"{{hours12}}:{{minutes}}{{amPm}}",
		es:"{{hours12}}:{{minutes}}{{amPm}}"
	},
	"pm":{
		en:"pm",
		es:"pm"
	},
	"am":{
		en:"am",
		es:"am"
	},
	"PM":{
		en:"PM",
		es:"PM"
	},
	"AM":{
		en:"AM",
		es:"AM"
	},
	"Ctrl+Enter":{
		en:"Ctrl+Enter",
		es:"Ctrl+Intro"
	},
	"Tweet":{
		en:"Tweet",
		es:"Tweet"
	},
	"Members of this team can use Twitter as @{{account.screenName}} without knowing the password.":{
		en:"Members of this team can use Twitter as @{{account.screenName}} without knowing the password.",
		es:"Los miembros de este equipo pueden usar Twitter como @{{account.screenName}} sin conocer la contraseña."
	},
	"@username or name":{
		en:"@username or name",
		es:"@usario o nombre"
	},
	"Cancel":{
		en:"Cancel",
		es:"Cancelar"
	},
	"Leave team":{
		en:"Leave team",
		es:"Abandonar equipo"
	},
	"Add a team member":{
		en:"Add a team member",
		es:"Añadir un miembro del equipo"
	},
	"Leave":{
		en:"Leave",
		es:"Abandonar"
	},
	"Set @{{screenName}} as your default account for new Tweets and searches":{
		en:"Set @{{screenName}} as your default account for new Tweets and searches",
		es:"Establecer @{{screenName}} como su cuenta predeterminada para nuevos Tweets y búsquedas"
	},
	"@{{screenName}} is your default account for new Tweets and searches":{
		en:"@{{screenName}} is your default account for new Tweets and searches",
		es:"@{{screenName}} es tu cuenta predeterminada para nuevos Tweets y búsquedas"
	},
	"Default account":{
		en:"Default account",
		es:"Cuenta predeterminada"
	},
	"Add a confirmation step before Tweeting as":{
		en:"Add a confirmation step before Tweeting as",
		es:"Agregue un paso de confirmación antes de tweetear como"
	},
	"Confirmation step":{
		en:"Confirmation step",
		es:"Paso de confirmación"
	},
	"Manage team":{
		en:"Manage team",
		es:"Administrar equipo"
	},
	"Invite colleagues to use Twitter as @{{screenName}} without sharing the password with them.":{
		en:"Invite colleagues to use Twitter as @{{screenName}} without sharing the password with them.",
		es:"Invita a tus colegas a usar Twitter como @{{screenName}} sin compartir la contraseña con ellos."
	},
	"{{{user}}} liked":{
		en:"{{{user}}} liked",
		es:"A {{{user}}} le gustó"
	},
	"{{{user}}} mentioned you":{
		en:"{{{user}}} mentioned you",
		es:"A {{{user}}} te mencionó"
	},
	"{{{user}}} liked a Tweet you were mentioned in":{
		en:"{{{user}}} liked a Tweet you were mentioned in",
		es:"A {{{user}}} le gustó un tweet en el que te mencionaron"
	},
	"{{{user}}} Retweeted":{
		en:"{{{user}}} Retweeted",
		es:"{{{user}}} Retweeteó"
	},
	"Delete":{
		en:"Delete",
		es:"Eliminar"
	},
	"Remove":{
		en:"Remove",
		es:"Eliminar"
	},
	"View":{
		en:"View",
		es:"Ver"
	},
	"Edit":{
		en:"Edit",
		es:"Editar"
	},
	"Add column":{
		en:"Add column",
		es:"Añadir columna"
	},
	"Add a column":{
		en:"Add a column",
		es:"Añadir una columna"
	},
	"Add a Column":{
		en:"Add a Column",
		es:"Añadir una Columna"
	},
	"New Tweet":{
		en:"New Tweet",
		es:"Nuevo Tweet"
	},
	"Accounts":{
		en:"Accounts",
		es:"Cuentas"
	},
	"Accounts you can act as":{
		en:"Accounts you can act as",
		es:"Cuentas que puedes actuar como"
	},
	"Image":{
		en:"Image",
		es:"Imagen"
	},
	"Images":{
		en:"Images",
		es:"Imagenes"
	},
	"Verified account":{
		en:"Verified account",
		es:"Cuenta verificada"
	},
	"Video":{
		en:"Video",
		es:"Video"
	},
	"Reply":{
		en:"Reply",
		es:"Responder"
	},
	"Team invitations":{
		en:"Team invitations",
		es:"Invitaciones del equipo"
	},
	"1 New Tweet":{
		en:"1 New Tweet",
		es:"1 Nuevo Tweet"
	},
	"{{numberNew}} New Tweets":{
		en:"{{numberNew}} New Tweets",
		es:"{{numberNew}} Nuevos Tweets"
	},
	"TweetDeck needs permission to show your desktop notifications in this browser":{
		en:"TweetDeck needs permission to show your desktop notifications in this browser",
		es:"TweetDeck necesita permiso para mostrar las notificaciones en este navegador"
	},
	"Let's go!":{
		en:"Let's go!",
		es:"¡Vamonos!"
	},
	"Ready to send?":{
		en:"Ready to send?",
		es:"¿Listo para enviar?"
	},
	"Ready to Tweet?":{
		en:"Ready to Tweet?",
		es:"¿Listo para Tweetear?"
	},
	"Tweet at {{time}}":{
		en:"Tweet at {{time}}",
		es:"Tweetear a {{time}}"
	},
	"This Tweet is unavailable":{
		en:"This Tweet is unavailable",
		es:"Este Tweet no está disponible"
	},
	"Scheduled for:":{
		en:"Scheduled for:",
		es:"Programado para:"
	},
	"Ready to schedule?":{
		en:"Ready to schedule?",
		es:"¿Listo para programar?"
	},
	"Go to final column":{
		en:"Go to final column",
		es:"Ir a la columna final"
	},
	"Go to column — {{title}}":{
		en:"Go to column — {{title}}",
		es:"Ir a la columna — {{title}}"
	},
	"{{{user}}} followed you":{
		en:"{{{user}}} followed you",
		es:"{{{user}}} te siguió"
	},
	"{{{user}}} Retweeted a Tweet you were mentioned in":{
		en:"{{{user}}} Retweeted a Tweet you were mentioned in",
		es:"{{{user}}} Retweeteó un Tweet que has sido mencionado en"
	},
	"{{{user}}} liked your Retweet":{
		en:"{{{user}}} liked your Retweet",
		es:"A {{{user}}} le gustó tu Retweet"
	},
	"{{{user}}} Retweeted your Retweet":{
		en:"{{{user}}} Retweeted your Retweet",
		es:"{{{user}}} Retweeteó tu Retweet"
	},
	"Like from {{getUsername}}":{
		en:"Like from {{getUsername}}",
		es:"Me gusta de {{getUsername}}"
	},
	"Unlike from {{getUsername}}":{
		en:"Unlike from {{getUsername}}",
		es:"Deshacer me gusta de {{getUsername}}"
	},
	"The following media may contain sensitive material.":{
		en:"The following media may contain sensitive material.",
		es:"Los siguientes medios pueden contener material sensible."
	},
	"New Activity":{
		en:"New Activity",
		es:"Nueva Actividad"
	},
	"New Messages":{
		en:"New Messages",
		es:"Nuevos Mensajes"
	},
	"New Followers":{
		en:"New Followers",
		es:"Nuevos Seguidores"
	},
	"New Tweets":{
		en:"New Tweets",
		es:"Nuevos Tweets"
	},
	"{{numberNew}} New Messages":{
		en:"{{numberNew}} New Messages",
		es:"{{numberNew}} Nuevos Mensajes"
	},
	"{{numberNew}} New Notifications":{
		en:"{{numberNew}} New Notifications",
		es:"{{numberNew}} Nuevas Notificaciones"
	},
	"{{numberNew}} New Followers":{
		en:"{{numberNew}} New Followers",
		es:"{{numberNew}} Nuevos Seguidores"
	},
	"{{numberNew}} New Tweets":{
		en:"{{numberNew}} New Tweets",
		es:"{{numberNew}} Nuevos Tweets"
	},
	"1 New Message":{
		en:"1 New Message",
		es:"1 Nuevo Mensaje"
	},
	"1 New Follower":{
		en:"1 New Follower",
		es:"1 Nuevo Seguidor"
	},
	"1 New Tweet":{
		en:"1 New Tweet",
		es:"1 Nuevo Tweet"
	},
	"1 New Notification":{
		en:"1 New Notification",
		es:"1 Nuevo Notificación"
	},
	"Back to {{{columntitle}}}":{
		en:"Back to {{{columntitle}}}",
		es:"Volver a {{{columntitle}}}"
	},
	"Notifications":{
		en:"Notifications",
		es:"Notificaciones"
	},
	"Log out":{
		en:"Log out",
		es:"Cerrar sesión"
	},
	"{{getLightChirpURL}}":{
		en:"{{getLightChirpURL}}",
		es:"{{getLightChirpURL}}"
	},
	"Keyboard shortcuts":{
		en:"Keyboard shortcuts",
		es:"Atajos de teclado"
	},
	"{{screenName}}'s avatar":{
		en:"{{screenName}}'s avatar",
		es:"Avatar de {{screenName}}"
	},
	"Your scheduled Tweet will send even if TweetDeck is not running at the time.":{
		en:"Your scheduled Tweet will send even if TweetDeck is not running at the time.",
		es:"Su Tweet programado se enviará incluso si TweetDeck no está abierto en ese momento."
	},
	"TweetDeck":{
		en:"TweetDeck",
		es:"TweetDeck"
	},
	"Edit profile":{
		en:"Edit profile",
		es:"Editar perfil"
	},
	"Unblock":{
		en:"Unblock",
		es:"Desbloquear"
	},
	"Block":{
		en:"Block",
		es:"Bloquear"
	},
	"Blocked":{
		en:"Blocked",
		es:"Bloqueado"
	},
	"Pending":{
		en:"Pending",
		es:"Pendiente"
	},
	"Unfollow":{
		en:"Unfollow",
		es:"Dejar de Seguir"
	},
	"Follow":{
		en:"Follow",
		es:"Seguir"
	},
	"From {{#account}}@{{getUsername}}{{/account}}":{
		en:"From {{#account}}@{{getUsername}}{{/account}}",
		es:"De {{#account}}@{{getUsername}}{{/account}}"
	},
	"Listed":{
		en:"Listed",
		es:"Listado"
	},
	"Following":{
		en:"Following",
		es:"Siguiendo"
	},
	"Tweets":{
		en:"Tweets",
		es:"Tweets"
	},
	"Follows @{{preferredAccount}}":{
		en:"Follows @{{preferredAccount}}",
		es:"Sigue @{{preferredAccount}}"
	},
	"Translator":{
		en:"Translator",
		es:"Traductor"
	},
	"Amharic":{en:"Amharic",es:"Amárico"},
	"Arabic":{en:"Arabic",es:"Árabe"},
	"Armenian":{en:"Armenian",es:"Armenio"},
	"Bengali":{en:"Bengali",es:"Bengalí"},
	"Bulgarian":{en:"Bulgarian",es:"Búlgaro"},
	"Catalan":{en:"Catalan",es:"Catalán"},
	"Cherokee":{en:"Cherokee",es:"Cherokee"},
	"Chinese":{en:"Chinese",es:"Chino"},
	"Czech":{en:"Czech",es:"Checo"},
	"Danish":{en:"Danish",es:"Danés"},
	"Dutch":{en:"Dutch",es:"Holandés"},
	"English":{en:"English",es:"Inglés"},
	"Estonian":{en:"Estonian",es:"Estonio"},
	"Finnish":{en:"Finnish",es:"Finlandés"},
	"French":{en:"French",es:"Francés"},
	"Georgian":{en:"Georgian",es:"Georgiano"},
	"German":{en:"German",es:"Alemán"},
	"Greek":{en:"Greek",es:"Griego"},
	"Gujarati":{en:"Gujarati",es:"Gujarati"},
	"Haitian Creole":{en:"Haitian Creole",es:"Criollo Haitiano"},
	"Hebrew":{en:"Hebrew",es:"Hebreo"},
	"Hindi":{en:"Hindi",es:"Hindi"},
	"Hungarian":{en:"Hungarian",es:"Húngaro"},
	"Icelandic":{en:"Icelandic",es:"Islandés"},
	"Indonesian":{en:"Indonesian",es:"Indonesio"},
	"Inuktitut":{en:"Inuktitut",es:"Inuktitut"},
	"Italian":{en:"Italian",es:"Italiano"},
	"Japanese":{en:"Japanese",es:"Japonés"},
	"Kannada":{en:"Kannada",es:"Kannada"},
	"Khmer":{en:"Khmer",es:"Khmer"},
	"Korean":{en:"Korean",es:"Coreano"},
	"Lao":{en:"Lao",es:"Lao"},
	"Latvian":{en:"Latvian",es:"Letón"},
	"Lithuanian":{en:"Lithuanian",es:"Lituano"},
	"Malayalam":{en:"Malayalam",es:"Malayalam"},
	"Maldivian":{en:"Maldivian",es:"Maldivo"},
	"Myanmar":{en:"Myanmar",es:"Myanmar"},
	"Nepali":{en:"Nepali",es:"Nepalí"},
	"Norwegian":{en:"Norwegian",es:"Noruego"},
	"Oriya":{en:"Oriya",es:"Oriya"},
	"Panjabi":{en:"Panjabi",es:"Panjabi"},
	"Persian":{en:"Persian",es:"Persa"},
	"Polish":{en:"Polish",es:"Polaco"},
	"Portuguese":{en:"Portuguese",es:"Portugués"},
	"Romanian":{en:"Romanian",es:"Rumano"},
	"Russian":{en:"Russian",es:"Ruso"},
	"Sinhala":{en:"Sinhala",es:"Sinhala"},
	"Slovak":{en:"Slovak",es:"Eslovaco"},
	"Slovene":{en:"Slovene",es:"Esloveno"},
	"Spanish":{en:"Spanish",es:"Español"},
	"Swedish":{en:"Swedish",es:"Sueco"},
	"Tagalog":{en:"Tagalog",es:"Tagalo"},
	"Tamil":{en:"Tamil",es:"Tamil"},
	"Telugu":{en:"Telugu",es:"Telugu"},
	"Thai":{en:"Thai",es:"Tailandés"},
	"Tibetan":{en:"Tibetan",es:"Tibetano"},
	"Turkish":{en:"Turkish",es:"Turco"},
	"Ukrainian":{en:"Ukrainian",es:"Ucrano"},
	"Urdu":{en:"Urdu",es:"Urdu"},
	"Vietnamese":{en:"Vietnamese",es:"Vietnamita"},
	"-":{en:"-",es:"-"},

	"Unknown Column":{
		en:"Unknown Column",
		es:"Columna Desconocida"
	},
	"General Election":{
		en:"General Election",
		es:"Elección General"
	},
	"Live video":{
		en:"Live video",
		es:"Video en vivo"
	},
	"Trending":{
		en:"Trending",
		es:"Tendencias"
	},
	"Trends":{
		en:"Trends",
		es:"Tendencias"
	},
	"Scheduled":{
		en:"Scheduled",
		es:"Programado"
	},
	"Followers":{
		en:"Followers",
		es:"Seguidores"
	},
	"Mentions":{
		en:"Mentions",
		es:"Menciones"
	},
	"Messages":{
		en:"Messages",
		es:"Mensajes"
	},
	"Activity":{
		en:"Activity",
		es:"Actividad"
	},
	"Collection":{
		en:"Collection",
		es:"Colección"
	},
	"List":{
		en:"List",
		es:"Lista"
	},
	"User":{
		en:"User",
		es:"Usario"
	},
	"Home":{
		en:"Home",
		es:"Inicio"
	},
	"User mutes work across TweetDeck & Twitter. To review your list of user mutes visit <a href=\"https://twitter.com/settings/muted\" target=\"_blank\" rel=\"url\">twitter.com/settings/muted</a>.":{
		en:"User mutes work across TweetDeck & Twitter. To review your list of user mutes visit <a href=\"https://twitter.com/settings/muted\" target=\"_blank\" rel=\"url\">twitter.com/settings/muted</a>.",
		es:"Silenciadas configurables funcionan a través de TweetDeck y Twitter. Para examinar tu lista de silenciadas configurables visitar <a href=\"https://twitter.com/settings/muted\" target=\"_blank\" rel=\"url\">twitter.com/settings/muted</a>."
	},
	"Bit.ly API Key":{
		en:"Bit.ly API Key",
		es:"Bit.ly Llave API"
	},
	"Bit.ly Username":{
		en:"Bit.ly Username",
		es:"Bit.ly Nombre de Usuario"
	},
	' <div class="other-replies txt-ellipsis"> Replying {{#recipients}} to <a href="#" class="js-other-replies-link other-replies-link" data-recipient-ids="{{userIds}}"> {{#users}} @{{screenName}} {{/users}} {{#remainder}} and {{remainder}} others {{/remainder}} </a> {{/recipients}} </div> ':{
		en:' <div class="other-replies txt-ellipsis"> Replying {{#recipients}} to <a href="#" class="js-other-replies-link other-replies-link" data-recipient-ids="{{userIds}}"> {{#users}} @{{screenName}} {{/users}} {{#remainder}} and {{remainder}} others {{/remainder}} </a> {{/recipients}} </div> ',
		es:' <div class="other-replies txt-ellipsis"> Respondiendo {{#recipients}} a <a href="#" class="js-other-replies-link other-replies-link" data-recipient-ids="{{userIds}}"> {{#users}} @{{screenName}} {{/users}} {{#remainder}} y {{remainder}} más {{/remainder}} </a> {{/recipients}} </div> '
	},
	'Your <a href="#" rel="globalSettings">Tweet media display settings</a> are configured to inform you when media may be sensitive.':{
		en:'Your <a href="#" rel="globalSettings">Tweet media display settings</a> are configured to inform you when media may be sensitive.',
		es:'Tus <a href="#" rel="globalSettings">preferencias para mostrar tweets</a> están configuradas para informarte cuando los medios pueden ser sensibles.'
	},
	"Clear all":{
		en:"Clear all",
		es:"Despejar todos"
	},
	"Link another account you own":{
		en:"Link another account you own",
		es:"Adjuntar otra cuenta que tienes"
	},
	"Reply to":{
		en:"Reply to",
		es:"Responder a"
	},
	"Release to refresh":{
		en:"Release to refresh",
		es:"Soltar para actualizar"
	},
	"Add here":{
		en:"Add here",
		es:"Añadir aquí"
	},
	"Compose new message":{
		en:"Compose new message",
		es:"Componer nuevo mensaje"
	},
	"Disable Dev/Dogfood Features":{
		en:"Disable Dev/Dogfood Features",
		es:"Inhabilitar caracteristicas de Desarroll./Dogfood"
	},
	"Disable dev/dogfood features":{
		en:"Disable dev/dogfood features",
		es:"inhabilitar caracteristicas de desarroll./dogfood"
	},
	"Increase column width":{
		en:"Increase column width",
		es:"Aumenta el ancho de las columnas"
	},
	"Decrease column width":{
		en:"Decrease column width",
		es:"Disminuir el ancho de las columnas"
	},
	"Increase font size":{
		en:"Increase font size",
		es:"Aumenta el tamaño de fuentes"
	},
	"Decrease font size":{
		en:"Decrease font size",
		es:"Disminuir el tamaño de fuentes"
	},
	"Collapse":{
		en:"Collapse",
		es:"Colapsar"
	},
	"Expand":{
		en:"Expand",
		es:"Expandir"
	},
	"Expand/Collapse Navigation":{
		en:"Expand/Collapse Navigation",
		es:"Expandir/Colapsar La Navegación"
	},
	"Schedule Tweet":{
		en:"Schedule Tweet",
		es:"Programar Tweet"
	},		
	"Add image":{
		en:"Add image",
		es:"Añadir imagen"
	},		
	"Add images or video":{
		en:"Add images or video",
		es:"Añadir imagenes o video"
	},
	"To":{
		en:"To",
		es:"A"
	},
	"From":{
		en:"From",
		es:"De"
	},
	"Direct message":{
		en:"Direct message",
		es:"Mensaje directo"
	},
	"Stay open":{
		en:"Stay open",
		es:"Mantener abierta"
	},
	"Mark all as read":{
		en:"Mark all as read",
		es:"Marcar todo como leido"
	},
	"Filtered by:":{
		en:"Filtered by:",
		es:"Filtrado por:"
	},
	"1st":{en:"1st",es:"1"},
	"2nd":{en:"2nd",es:"2"},
	"3rd":{en:"3rd",es:"3"},
	"4th":{en:"4th",es:"4"},
	"5th":{en:"5th",es:"5"},
	"6th":{en:"6th",es:"6"},
	"7th":{en:"7th",es:"7"},
	"8th":{en:"8th",es:"8"},
	"9th":{en:"9th",es:"9"},
	"10th":{en:"10th",es:"10"},
	"11th":{en:"11th",es:"11"},
	"12th":{en:"12th",es:"12"},
	"13th":{en:"13th",es:"13"},
	"14th":{en:"14th",es:"14"},
	"15th":{en:"15th",es:"15"},
	"16th":{en:"16th",es:"16"},
	"17th":{en:"17th",es:"17"},
	"18th":{en:"18th",es:"18"},
	"19th":{en:"19th",es:"19"},
	"20th":{en:"20th",es:"20"},
	"21st":{en:"21st",es:"21"},
	"22nd":{en:"22nd",es:"22"},
	"23rd":{en:"23rd",es:"23"},
	"24th":{en:"24th",es:"24"},
	"25th":{en:"25th",es:"25"},
	"26th":{en:"26th",es:"26"},
	"27th":{en:"27th",es:"27"},
	"28th":{en:"28th",es:"28"},
	"29th":{en:"29th",es:"29"},
	"30th":{en:"30th",es:"30"},
	"31st":{en:"31st",es:"31"},
	"{{plural_number}}d":{
		en:"{{plural_number}}d",
		es:"{{plural_number}}d"
	},		
	"{{plural_number}}h":{
		en:"{{plural_number}}h",
		es:"{{plural_number}}h"
	},
	"{{plural_number}}m":{
		en:"{{plural_number}}m",
		es:"{{plural_number}}m"
	},
	"{{plural_number}}s":{
		en:"{{plural_number}}s",
		es:"{{plural_number}}s"
	},
	"{{plural_number}} days left":{
		en:"{{plural_number}} days left",
		es:"{{plural_number}} days left"
	},		
	"{{plural_number}} hours left":{
		en:"{{plural_number}} hours left",
		es:"{{plural_number}} hours left"
	},
	"{{plural_number}} minutes left":{
		en:"{{plural_number}} minutes left",
		es:"{{plural_number}} minutes left"
	},
	"{{plural_number}} seconds left":{
		en:"{{plural_number}} seconds left",
		es:"{{plural_number}} seconds left"
	},
	"{{plural_number}} days ago":{
		en:"{{plural_number}} days ago",
		es:"{{plural_number}} days ago"
	},		
	"{{plural_number}} hours ago":{
		en:"{{plural_number}} hours ago",
		es:"{{plural_number}} hours ago"
	},
	"{{plural_number}} minutes ago":{
		en:"{{plural_number}} minutes ago",
		es:"{{plural_number}} minutes ago"
	},
	"{{plural_number}} seconds ago":{
		en:"{{plural_number}} seconds ago",
		es:"{{plural_number}} seconds ago"
	},
	"{{one}} day left":{
		en:"{{one}} day left",
		es:"{{one}} day left"
	},		
	"{{one}} hour left":{
		en:"{{one}} hour left",
		es:"{{one}} hour left"
	},
	"{{one}} minute left":{
		en:"{{one}} minute left",
		es:"{{one}} minute left"
	},
	"{{one}} second left":{
		en:"{{one}} second left",
		es:"{{one}} second left"
	},
	"{{one}} day ago":{
		en:"{{one}} day ago",
		es:"{{one}} day ago"
	},		
	"{{one}} hour ago":{
		en:"{{one}} hour ago",
		es:"{{one}} hour ago"
	},
	"{{one}} minute ago":{
		en:"{{one}} minute ago",
		es:"{{one}} minute ago"
	},
	"{{one}} second ago":{
		en:"{{one}} second ago",
		es:"{{one}} second ago"
	},
	"{{one}}d":{
		en:"{{one}}d",
		es:"{{one}}d"
	},		
	"{{one}}h":{
		en:"{{one}}h",
		es:"{{one}}h"
	},
	"{{one}}m":{
		en:"{{one}}m",
		es:"{{one}}m"
	},
	"{{one}}s":{
		en:"{{one}}s",
		es:"{{one}}s"
	},
	"Try":{
		en:"Try",
		es:"Tratar"
	},
	"Dataminr":{
		en:"Dataminr",
		es:"Dataminr"
	},
	"You're on the team! Only admins of this account can manage the team.":{
		en:"You're on the team! Only admins of this account can manage the team.",
		es:"¡Estás en el equipo! Solo los administradores de esta cuenta pueden administrar el equipo."
	},
	"Team @{{screenName}}":{
		en:"Team @{{screenName}}",
		es:"Equipo @{{screenName}}"
	},
	"Find tweets...":{
		en:"Find tweets...",
		es:"Buscar tweets..."
	},
	"Operator":{
		en:"Operator",
		es:"Operador"
	},
	"Loading...":{
		en:"Loading...",
		es:"Cargando..."
	},
	"Loading…":{
		en:"Loading…",
		es:"Cargando…"
	},
	"added you":{
		en:"added you",
		es:"te agregó"
	},
	" Retweeted":{
		en:" Retweeted",
		es:" Retweeteado"
	},
	"Always show me sensitive media":{
		en:"Always show me sensitive media",
		es:"Siempre muéstrame medios sensibles"
	},
	"More options":{
		en:"More options",
		es:"Más opciones"
	},
	"Mute Settings":{
		en:"Mute Settings",
		es:"Ajustes de Silenciando"
	},
	"Stream Tweets in realtime":{
		en:"Stream Tweets in realtime",
		es:"Transmitir Tweets en tiempo real"
	},
	"Show notifications on startup":{
		en:"Show notifications on startup",
		es:"Mostrar notificaciones al inicio"
	},
	"Display media that may contain sensitive content":{
		en:"Display media that may contain sensitive content",
		es:"Mostrar medios que pueden contener contenido sensible"
	},
	"Link Shortening":{
		en:"Link Shortening",
		es:"Acortar Enlaces"
	},
	"Done":{
		en:"Done",
		es:"Terminado"
	},
	"Settings":{
		en:"Settings",
		es:"Ajustes"
	},
	"General":{
		en:"General",
		es:"General"
	},
	"General Settings":{
		en:"General Settings",
		es:"Ajustes Generales"
	},
	"Enter a word or phrase":{
		en:"Enter a word or phrase",
		es:"Entrar una palabra o frase"
	},
	"Mute":{
		en:"Mute",
		es:"Silenciar"
	},
	"Words or phrases":{
		en:"Words or phrases",
		es:"Palabras o frases"
	},
	"Matching":{
		en:"Matching",
		es:"Igual a"
	},
	"Tweet Source":{
		en:"Tweet Source",
		es:"Fuente de Tweet"
	},
	"Services Settings":{
		en:"Services Settings",
		es:"Ajustes de Servicios"
	},
	"Autoplay GIFs":{
		en:"Autoplay GIFs",
		es:"Reproduce automáticamente GIFs"
	},
	"Cookies":{
		en:"Cookies",
		es:"Cookies"
	},
	"Large":{
		en:"Large",
		es:"Grande"
	},
	"Largest":{
		en:"Largest",
		es:"Más grande"
	},
	"Smallest":{
		en:"Smallest",
		es:"Más pequeño"
	},
	"Small":{
		en:"Small",
		es:"Pequeño"
	},
	"Wide":{
		en:"Wide",
		es:"Amplia"
	},
	"Medium":{
		en:"Medium",
		es:"Medio"
	},
	"Narrow":{
		en:"Narrow",
		es:"Estrecha"
	},
	"Dark":{
		en:"Dark",
		es:"Oscuro"
	},
	"Light":{
		en:"Light",
		es:"Claro"
	},
	"Columns":{
		en:"Columns",
		es:"Columnas"
	},
	"Font size":{
		en:"Font size",
		es:"Tamaño de Fuentes"
	},
	"Search Twitter":{
		en:"Search Twitter",
		es:"Buscar Twitter"
	},
	"Show Keyboard Shortcuts":{
		en:"Show Keyboard Shortcuts",
		es:"Mostrar Atajos de Teclado"
	},
	"Show Accounts":{
		en:"Show Accounts",
		es:"Mostrar Las Cuentas"
	},
	"Show Search Tips":{
		en:"Show Search Tips",
		es:"Mostrar Consejos de Buscar"
	},
	"Search tips":{
		en:"Search tips",
		es:"Consejos de buscar"
	},
	"Show Settings":{
		en:"Show Settings",
		es:"Mostrar Ajustes"
	},
	"View original":{
		en:"View original",
		es:"Ver original"
	},
	"View conversation":{
		en:"View conversation",
		es:"Ver conversación"
	},
	"View Conversation":{
		en:"View Conversation",
		es:"Ver Conversación"
	},
	"Vote on twitter.com":{
		en:"Vote on twitter.com",
		es:"Votar en twitter.com"
	},
	"Translate Tweet":{
		en:"Translate Tweet",
		es:"Traducir Tweet"
	},
	"Flagged (learn more)":{
		en:"Flagged (learn more)",
		es:"Marcado (aprender más)"
	},
	"Flag media":{
		en:"Flag media",
		es:"Marcar medio"
	},
	"Final results":{
		en:"Final results",
		es:"Resultados finales"
	},
	"Skip to replies":{
		en:"Skip to replies",
		es:"Saltar a las respuestas"
	},
	"Options":{
		en:"Options",
		es:"Opcions"
	},
	"Remove from collection":{
		en:"Remove from collection",
		es:"Retirar de colección"
	},
	"Drag to collection":{
		en:"Drag to collection",
		es:"Arrastre a colección"
	},
	"1 more reply":{
		en:"1 more reply",
		es:"1 respuesta más"
	},
	"2 more replies":{
		en:"2 more replies",
		es:"2 respuestas más"
	},
	"View on analytics.twitter.com":{
		en:"View on analytics.twitter.com",
		es:"Ver en analytics.twitter.com"
	},
	"Replies":{
		en:"Replies",
		es:"Respuestas"
	},
	"Retweets":{
		en:"Retweets",
		es:"Retweets"
	},
	"Likes":{
		en:"Likes",
		es:"Me gusta"
	},
	"Show this thread":{
		en:"Show this thread",
		es:"Muestra esta conversación"
	},
	"By":{
		en:"By",
		es:"Por"
	},
	"@username/list-name":{
		en:"@username/list-name",
		es:"@usuario/nombre-de-lista"
	},
	"user name":{
		en:"user name",
		es:"nombre de usuario"
	},
	"me…":{
		en:"me…",
		es:"yo…"
	},
	"specific user…":{
		en:"specific user…",
		es:"usuario específico…"
	},
	"Tweets with links":{
		en:"Tweets with links",
		es:"Tweets con enlaces"
	},
	"Tweets with any media":{
		en:"Tweets with any media",
		es:"Tweets with cualquier medio"
	},
	"Tweets with Broadcasts":{
		en:"Tweets with Broadcasts",
		es:"Tweets with Videos en Vivo"
	},
	"Tweets with Vines":{
		en:"Tweets with Vines",
		es:"Tweets con Vines"
	},
	"Tweets with GIFs":{
		en:"Tweets with GIFs",
		es:"Tweets con GIFs"
	},
	"Tweets with videos":{
		en:"Tweets with videos",
		es:"Tweets con videos"
	},
	"Tweets with images":{
		en:"Tweets with images",
		es:"Tweets con imagenes"
	},
	"included":{
		en:"included",
		es:"incluido"
	},
	"excluded":{
		en:"excluded",
		es:"excluido"
	},
	"all Tweets":{
		en:"all Tweets",
		es:"todos Tweets"
	},
	"Users":{
		en:"Users",
		es:"Usarios"
	},
	"Content":{
		en:"Content",
		es:"Contenido"
	},
	"Clear column":{
		en:"Clear column",
		es:"Aclarar columna"
	},
	"Delete collection":{
		en:"Delete collection",
		es:"Eliminar colección"
	},
	"Right":{
		en:"Right",
		es:"Derecha"
	},
	"Left":{
		en:"Left",
		es:"Izquierda"
	},
	"right":{
		en:"right",
		es:"derecha"
	},
	"left":{
		en:"left",
		es:"izquierda"
	},
	"Update TweetDeck":{
		en:"Update TweetDeck",
		es:"Actualizar TweetDeck"
	},
}

var patchedTDi = false;

function patchTDi() {
	if (typeof TD !== "undefined") {
		TD.i = function(a,b,c) {
			if (typeof a !== "undefined") {
				if (typeof b === "undefined" || b === null) {
					if (typeof customLanguageData[a] !== "undefined") {
						return customLanguageData[a][languageFull]||customLanguageData[a][languageMain]||customLanguageData[a][languageFallback];
					} else if (typeof languageData[a] !== "undefined") {
						return languageData[a][languageFull]||languageData[a][languageMain]||languageData[a][languageFallback];
					} else {
						console.log("Missing string: "+a);
						return a;
					}
				} else {
					var a = a;
					for (var key in b) {
						a = a.replace("{{"+key+"}}",b[key]);
					}
					return a;
				}
			} else {
				console.log("man you gotta actually specify something for TD.i");
				console.log(a,b,c);
			}
		}
		patchedTDi = true;
	} else {
		console.log("Waiting for TD to be ready...");
		setTimeout(patchTDi,0);
		return;
	}
}

function patchColumnTitle() {
	if (typeof mR !== "undefined" && patchedTDi) {
		var columnData = mR.findFunction("getColumnTitleArgs")[0].columnMetaTypeToTitleTemplateData;
		for (var key in columnData) {
			columnData[key].title = TD.i(columnData[key].title);
		}
	} else {
		console.log("Waiting for TD.i and mR to be ready...");
		setTimeout(patchColumnTitle,0);
		return;
	}
}

function patchColumnTitleAddColumn() {
	if (patchedTDi && TD && TD.controller && TD.controller.columnManager && TD.controller.columnManager.DISPLAY_ORDER) {
		var columnData = TD.controller.columnManager.DISPLAY_ORDER;
		for (var key in columnData) {
			columnData[key].title = TD.i(columnData[key].title);
		}
	} else {
		console.log("Waiting for DISPLAY_ORDER and etc to be ready...");
		setTimeout(patchColumnTitleAddColumn,0);
		return;
	}
}

patchTDi();
patchColumnTitle();
patchColumnTitleAddColumn();