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
		es:"Regresar"
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
		es:"Hacer Me Gusta y Retwittear"
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
		es:"Puede Twittear y administrar el equipo"
	},
	"Can Tweet as @{{contributee.getUsername}}":{
		en:"Can Tweet as @{{contributee.getUsername}}",
		es:"Puede Twittear como @{{contributee.getUsername}}"
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
		es:"Retwittear"
	},
	"Retweet with comment":{
		en:"Retweet with comment",
		es:"Retwittear con comentario"
	},
	"Create new list":{
		en:"Create new list",
		es:"Crear lista nueva"
	},
	"New List":{
		en:"New List",
		es:"Lista Nueva"
	},
	"Move here":{
		en:"Move here",
		es:"Mover aquí"
	},
	"New Collection":{
		en:"New Collection",
		es:"Colección Nueva"
	},
	"Create a new list":{
		en:"Create a new list",
		es:"Crear una lista nueva"
	},
	"Create a new collection":{
		en:"Create a new collection",
		es:"Crear una colección nueva"
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
		es:"Te Gustó"
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
		es:"Escribir URL de Tweet"
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
		es:"Twittear"
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
	"Recent searches":{
		en:"Recent searches",
		es:"Búsquedas recientes"
	},
	"Set @{{screenName}} as your default account for new Tweets and searches":{
		en:"Set @{{screenName}} as your default account for new Tweets and searches",
		es:"Establecer @{{screenName}} como su cuenta predeterminada para nuevos Tweets y búsquedas"
	},
	"@{{screenName}} is your default account for new Tweets and searches":{
		en:"@{{screenName}} is your default account for new Tweets and searches",
		es:"@{{screenName}} es tu cuenta predeterminada para nuevos Tweets y búsquedas"
	},
	"Default account":{
		en:"Default account",
		es:"Cuenta predeterminada"
	},
	"Add a confirmation step before Tweeting as":{
		en:"Add a confirmation step before Tweeting as",
		es:"Agregue un paso de confirmación antes de twittear como"
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
	"Add Column":{
		en:"Add Column",
		es:"Añadir Columna"
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
	"Account":{
		en:"Account",
		es:"Cuenta"
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
		es:"¿Listo para Twittear?"
	},
	"Tweet at {{time}}":{
		en:"Tweet at {{time}}",
		es:"Twittear a {{time}}"
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
	"{{{user}}} followed":{
		en:"{{{user}}} followed",
		es:"{{{user}}} siguió"
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
	"Unfollow @{{screenName}}":{
		en:"Unfollow @{{screenName}}",
		es:"Dejar de Seguir a @{{screenName}}"
	},
	"Follow @{{screenName}}":{
		en:"Follow @{{screenName}}",
		es:"Seguir a @{{screenName}}"
	},
	"Follow from accounts…":{
		en:"Follow from accounts…",
		es:"Seguir de las cuentas…"
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
		es:"Sigue a @{{preferredAccount}}"
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
	"followers":{
		en:"followers",
		es:"seguidores"
	},
	"All except followers":{
		en:"All except followers",
		es:"Todos excepto seguidores"
	},
	"mentions":{
		en:"mentions",
		es:"menciones"
	},
	"All except Tweets mentioning me":{
		en:"All except Tweets mentioning me",
		es:"Todos excepto menciones"
	},
	"All except mentions":{
		en:"All except mentions",
		es:"Todos excepto menciones"
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
	"Expand/Collapse navigation":{
		en:"Expand/Collapse navigation",
		es:"Expandir/Colapsar La navegación"
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
	"Add images":{
		en:"Add images",
		es:"Añadir imagenes"
	},
	"Add image or video":{
		en:"Add image or video",
		es:"Añadir imagen o video"
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
	"Send a Direct Message":{
		en:"Send a Direct Message",
		es:"Enviar un Mensaje Directo"
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
	"Loading":{
		en:"Loading",
		es:"Cargando"
	},
	"Updating":{
		en:"Updating",
		es:"Actualizando"
	},
	"}}Loading":{
		en:"}}Loading",
		es:"}}Cargando"
	},
	"}}Updating":{
		en:"}}Updating",
		es:"}}Actualizando"
	},
	"Loading…":{
		en:"Loading…",
		es:"Cargando…"
	},
	"added you":{
		en:"added you",
		es:"te agregó"
	},
	"Users added successfully":{
		en:"Users added successfully",
		es:"Usuarios agregados con éxito"
	},
	" Retweeted":{
		en:" Retweeted",
		es:" Retwitteado"
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
		es:"Escribir una palabra o frase"
	},
	"Mute":{
		en:"Mute",
		es:"Silenciar"
	},
	"Type in a location":{
		en:"Type in a location",
		es:"Escribir una ubicación"
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
	"Translate this Tweet":{
		en:"Translate this Tweet",
		es:"Traducir este Tweet"
	},
	"Flagged (learn more)":{
		en:"Flagged (learn more)",
		es:"Marcado (aprender más)"
	},
	"Flag media":{
		en:"Flag media",
		es:"Marcar medio"
	},
	"Flag message":{
		en:"Flag message",
		es:"Marcar mensaje"
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
	"Drag Tweets into this collection":{
		en:"Drag Tweets into this collection",
		es:"Arrastre Tweets a esta colección"
	},
	"Delete collection":{
		en:"Delete collection",
		es:"Eliminar colección"
	},
	"Add to collection":{
		en:"Add to collection",
		es:"Añadir a colección"
	},
	"Add to collection…":{
		en:"Add to collection…",
		es:"Añadir a colección…"
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
	"All except Retweets":{
		en:"All except Retweets",
		es:"Todos excepto Retweets"
	},
	"Likes":{
		en:"Likes",
		es:"Me gusta"
	},
	"All except likes":{
		en:"All except likes",
		es:"Todos excepto me gusta"
	},
	"likes":{
		en:"likes",
		es:"me gusta"
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
	"Name":{
		en:"Name",
		es:"Nombre"
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
	"Retweets excluded":{
		en:"Retweets excluded",
		es:"Retweets excluido"
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
	"Actions":{
		en:"Actions",
		es:"Acciones"
	},
	"Actions on my Retweets":{
		en:"Actions on my Retweets",
		es:"Acciones en mis Retweets"
	},
	"actions on my Retweets":{
		en:"actions on my Retweets",
		es:"acciones en mis Retweets"
	},
	"All except actions on my Retweets":{
		en:"All except actions on my Retweets",
		es:"Todos excepto acciones en mis Retweets"
	},
	"Actions on Tweets I'm mentioned in":{
		en:"Actions on Tweets I'm mentioned in",
		es:"Acciones en Tweets Me mencionaron en"
	},
	"Actions on Tweets I'm tagged in":{
		en:"Actions on Tweets I'm tagged in",
		es:"Acciones en los Tweets estoy etiquetado"
	},
	"View user profile":{
		en:"View user profile",
		es:"Ver perfil de usario"
	},
	"View Tweet Details":{
		en:"View Tweet Details",
		es:"Ver Detalles de Tweet"
	},
	"Close Tweet Details":{
		en:"Close Tweet Details",
		es:"Cerrar Detalles de Tweet"
	},
	"List Details":{
		en:"List Details",
		es:"Detalles de Lista"
	},
	"Edit Details":{
		en:"Edit Details",
		es:"Editar Detalles"
	},
	"Edit list details":{
		en:"Edit list details",
		es:"Editar detalles de lista"
	},
	"Send Tweet":{
		en:"Send Tweet",
		es:"Enviar Tweet"
	},
	"Send message":{
		en:"Send message",
		es:"Enviar mensaje"
	},
	"Command Palette — <b>NEW!</b>":{
		en:"Command Palette — <b>NEW!</b>",
		es:"Paleta de comandos — <b>NUEVA!</b>"
	},
	"Enter":{
		en:"Enter",
		es:"Intro"
	},
	"Backspace":{
		en:"Backspace",
		es:"Retroceso"
	},
	"This menu":{
		en:"This menu",
		es:"Este menú"
	},
	"Up":{
		en:"Up",
		es:"Arriba"
	},
	"Down":{
		en:"Down",
		es:"Abajo"
	},
	"Navigation":{
		en:"Navigation",
		es:"Navegación"
	},
	"Column 1－9":{
		en:"Column 1－9",
		es:"Columna 1－9"
	},
	"Final column":{
		en:"Final column",
		es:"Columna final"
	},
	"ERROR_ACCOUNT_DOESNT_EXIST":{
		en:"Account does not exist.",
		es:"La cuenta no existe."
	},
	"ERROR_BAD_PASSWORD":{
		en:"Incorrect password.",
		es:"Contraseña incorrecta."
	},
	"ERROR_RATE_LIMIT_EXCEEDED":{
		en:"You have exceeded the API rate limit.",
		es:"Has excedido el límite de la tasa API."
	},
	"ERROR_SESSION_EXPIRED":{
		en:"Your session has expired.",
		es:"Tu sesión ha caducado."
	},
	"Ctrl":{
		en:"Ctrl",
		es:"Ctrl"
	},
	"Add another Tweet":{
		en:"Add another Tweet",
		es:"Añadir otro Tweet"
	},
	"Tweet your reply":{
		en:"Tweet your reply",
		es:"Twittear tu respuesta"
	},
	"Find tweets...":{
		en:"Find tweets...",
		es:"Encontrar tweets..."
	},
	"No users found.":{
		en:"No users found.",
		es:"No se encontraron usuarios."
	},
	"Get started":{
		en:"Get started",
		es:"Empezar"
	},
	"Manage multiple accounts":{
		en:"Manage multiple accounts",
		es:"Administra cuentas múltiples"
	},
	"Create searches to track topics, events and hashtags. Refine the results with filters at the top of each timeline.":{
		en:"Create searches to track topics, events and hashtags. Refine the results with filters at the top of each timeline.",
		es:"Crea búsquedas para rastrear temas, eventos y hashtags. Refine los resultados con filtros en la parte superior de cada línea de tiempo."
	},
	"Find exactly what you&rsquo;re looking for":{
		en:"Find exactly what you&rsquo;re looking for",
		es:"Encuentra exactamente lo que estás buscando"
	},
	"Create a custom Twitter experience":{
		en:"Create a custom Twitter experience",
		es:"Crear una experiencia de Twitter personalizada"
	},
	"Organize and build collections, keep track of lists, searches, activity and more. Click the + in the sidebar.":{
		en:"Organize and build collections, keep track of lists, searches, activity and more. Click the + in the sidebar.",
		es:"Organice y cree colecciones, realice un seguimiento de listas, búsquedas, actividades y más. Haga clic en + en la barra lateral."
	},
	"Welcome to TweetDeck":{
		en:"Welcome to TweetDeck",
		es:"Bienvenidos a TweetDeck"
	},
	"Unable to add or move that Tweet":{
		en:"Unable to add or move that Tweet",
		es:"No se puede añadir o mover ese tweet"
	},
	"Can't recognize Tweet URL":{
		en:"Can't recognize Tweet URL",
		es:"No se puede reconocer la URL de Tweet"
	},
	"Tweet like a pro.":{
		en:"Tweet like a pro.",
		es:"Twittear como un profesional."
	},
	"Sign up now":{
		en:"Sign up now",
		es:"Regístrate ahora"
	},
	"New to Twitter?":{
		en:"New to Twitter?",
		es:"¿Eres nuevo en Twitter?"
	},
	"Log in with your Twitter account":{
		en:"Log in with your Twitter account",
		es:"Iniciar sesión con tu cuenta de Twitter"
	},
	"The most powerful Twitter tool for real-time tracking, organizing, and engagement. Reach your audiences and discover the best of Twitter.":{
		en:"The most powerful Twitter tool for real-time tracking, organizing, and engagement. Reach your audiences and discover the best of Twitter.",
		es:"La herramienta de Twitter más poderosa para el seguimiento, organización e interacción en tiempo real. Llegue a tu audiencia y descubres lo mejor de Twitter."
	},
	"Sorry, something went wrong. Please try again later.":{
		en:"Sorry, something went wrong. Please try again later.",
		es:"Perdón, algo salió mal. Por favor, inténtelo de nuevo más tarde."
	},
	" is below. Copy it to share with colleagues and friends.":{
		en:" is below. Copy it to share with colleagues and friends.",
		es:" esta abajo. Cópialo para compartirlo con colegas y amigos."
	},
	"The list of users in ":{
		en:"The list of users in ",
		es:"La lista de usuarios en "
	},
	"Are you sure you want to delete this list?":{
		en:"Are you sure you want to delete this list?",
		es:"¿Seguro que quieres eliminar esta lista?"
	},
	"Are you sure you want to delete this collection?":{
		en:"Are you sure you want to delete this collection?",
		es:"¿Seguro que quieres eliminar esta colección?"
	},
	"Deleting list!":{
		en:"Deleting list!",
		es:"¡Eliminando la Lista!"
	},
	"{{{owner}}} added you to their list {{{list}}}":{
		en:"{{{owner}}} added you to their list {{{list}}}",
		es:"{{{owner}}} te ha agregado a su lista {{{list}}}"
	},
	"{{{owner}}} added {{{added}}} to their list {{{list}}}":{
		en:"{{{owner}}} added {{{added}}} to their list {{{list}}}",
		es:"{{{owner}}} ha agregado {{{added}}} a su lista {{{list}}}"
	},
	"{{{owner}}} created the list {{{list}}}":{
		en:"{{{owner}}} created the list {{{list}}}",
		es:"{{{owner}}} ha creado la lista {{{list}}}"
	},
	"Add users to list":{
		en:"Add users to list",
		es:"Añadir usarios a lista"
	},
	"← Back":{
		en:"← Back",
		es:"← Regresar"
	},
	"You can add the @usernames one per line, or they can be separated by spaces, commas or tabs.":{
		en:"You can add the @usernames one per line, or they can be separated by spaces, commas or tabs.",
		es:"Puedes añadir los @nombres uno por línea, o pueden estar separados por espacios, comas o pestañas."
	},
	"You can add up to 100 members to a list at a time.":{
		en:"You can add up to 100 members to a list at a time.",
		es:"Puedes añadir hasta 100 miembros a una lista a la vez."
	},
	"Enter the @usernames of the people you would like to add to this list.":{
		en:"Enter the @usernames of the people you would like to add to this list.",
		es:"Escribir los @nombres del pueblo que te gustaría añadir a esta lista."
	},
	"Export list":{
		en:"Export list",
		es:"Exportar lista"
	},
	"Delete list":{
		en:"Delete list",
		es:"Elimimar lista"
	},
	"Members":{
		en:"Members",
		es:"Miembros"
	},
	"Loading list members…":{
		en:"Loading list members…",
		es:"Cargando miembros de lista…"
	},
	"Suggested":{
		en:"Suggested",
		es:"Sugerido"
	},
	"Under 100 characters, optional":{
		en:"Under 100 characters, optional",
		es:"Menos de 100 caracteres, opcional"
	},
	"Under 160 characters, optional":{
		en:"Under 160 characters, optional",
		es:"Menos de 160 caracteres, opcional"
	},
	"Save":{
		en:"Save",
		es:"Guardar"
	},
	"only visible to the owner":{
		en:"only visible to the owner",
		es:"solo visible para el dueño"
	},
	"Private":{
		en:"Private",
		es:"Privado"
	},
	"anyone can view":{
		en:"anyone can view",
		es:"cualquiera puede ver"
	},
	"Public":{
		en:"Public",
		es:"Pública"
	},
	"Privacy":{
		en:"Privacy",
		es:"Privacidad"
	},
	"Description":{
		en:"Description",
		es:"Descripción"
	},
	"Tailored":{
		en:"Tailored",
		es:"Adaptado"
	},
	"Regions":{
		en:"Regions",
		es:"Regiones"
	},
	"City":{
		en:"City",
		es:"Ciudad"
	},
	"Worldwide":{
		en:"Worldwide",
		es:"Mundial"
	},
	"All cities":{
		en:"All cities",
		es:"Todas ciudades"
	},
	" {{>text/open_strong}}Create Moment{{>text/close_strong}} ":{
		en:" {{>text/open_strong}}Create Moment{{>text/close_strong}} ",
		es:" {{>text/open_strong}}Crear Momento{{>text/close_strong}} "
	},
	" {{>text/open_strong}}Tweet{{>text/close_strong}} about this {{#isCustomTimeline}} collection {{/isCustomTimeline}} {{^isCustomTimeline}} timeline {{/isCustomTimeline}} ":{
		en:" {{>text/open_strong}}Tweet{{>text/close_strong}} about this {{#isCustomTimeline}} collection {{/isCustomTimeline}} {{^isCustomTimeline}} timeline {{/isCustomTimeline}} ",
		es:" {{>text/open_strong}}Twittear{{>text/close_strong}} sobre {{#isCustomTimeline}} collección {{/isCustomTimeline}} {{^isCustomTimeline}} timeline {{/isCustomTimeline}} "
	},
	"{{>text/open_strong}}View{{>text/close_strong}} on twitter.com":{
		en:"{{>text/open_strong}}View{{>text/close_strong}} on twitter.com",
		es:"{{>text/open_strong}}Ver{{>text/close_strong}} en twitter.com"
	},
	"{{>text/open_strong}}Copy{{>text/close_strong}} search query":{
		en:"{{>text/open_strong}}Copy{{>text/close_strong}} search query",
		es:"{{>text/open_strong}}Copiar{{>text/close_strong}} consulta de busqueda"
	},
	" {{>text/open_strong}}Embed{{>text/close_strong}} {{#isCustomTimeline}} collection {{/isCustomTimeline}} {{^isCustomTimeline}} timeline {{/isCustomTimeline}} ":{
		en:" {{>text/open_strong}}Embed{{>text/close_strong}} {{#isCustomTimeline}} collection {{/isCustomTimeline}} {{^isCustomTimeline}} timeline {{/isCustomTimeline}} ",
		es:" {{>text/open_strong}}Integrar{{>text/close_strong}} {{#isCustomTimeline}} la collección {{/isCustomTimeline}} {{^isCustomTimeline}} linea de tiempo {{/isCustomTimeline}} "
	},
	"Image attached":{
		en:"Image attached",
		es:"Imagen adjunta"
	},
	"replies":{
		en:"replies",
		es:"respuestas"
	},
	"At least":{
		en:"At least",
		es:"Al menos"
	},
	"at least":{
		en:"at least",
		es:"al menos"
	},
	"and at least":{
		en:"and at least",
		es:"y al menos"
	},
	"members of list…":{
		en:"members of list…",
		es:"miembros de lista…"
	},
	"Radius":{
		en:"Radius",
		es:"Radio"
	},
	"Tweets geo-tagged near":{
		en:"Tweets geo-tagged near",
		es:"Tweets geo-etiquetados cerca"
	},
	"select date":{
		en:"select date",
		es:"seleccione fecha"
	},
	"Engagements":{
		en:"Engagements",
		es:"Interacciones"
	},
	"Engagement":{
		en:"Engagement",
		es:"Interacción"
	},
	"Location":{
		en:"Location",
		es:"Ubicación"
	},
	"by users I follow":{
		en:"by users I follow",
		es:"por usuarios que sigo"
	},
	"All except Tweets tagging me":{
		en:"All except Tweets tagging me",
		es:"Todos excepto tweets que me etiquetan"
	},
	"Update your preferences on Twitter.com":{
		en:"Update your preferences on Twitter.com",
		es:"Actualice sus preferencias en Twitter.com"
	},
	"Improves the quality of Tweets you'll see.":{
		en:"Improves the quality of Tweets you'll see.",
		es:"Mejora la calidad de los Tweets que verás."
	},
	"Update your preferences on Twitter.com":{
		en:"Update your preferences on Twitter.com",
		es:"Actualice tus preferencias en Twitter.com"
	},
	"These filters will not affect notifications from people you follow.":{
		en:"These filters will not affect notifications from people you follow.",
		es:"Estos filtros no afectarán las notificaciones de las personas que sigues."
	},
	"Hiding notifications from users:":{
		en:"Hiding notifications from users:",
		es:"Ocultar las notificaciones de los usuarios:"
	},
	"Please select at least one interaction type":{
		en:"Please select at least one interaction type",
		es:"Favor seleccione al menos un tipo de interacción"
	},
	"users I follow":{
		en:"users I follow",
		es:"usuarios que sigo"
	},
	"Notification types":{
		en:"Notification types",
		es:"Tipos de notificaciones"
	},
	"Scheduled Tweets cannot contain multiple images":{
		en:"Scheduled Tweets cannot contain multiple images",
		es:"Los tweets programados no pueden contener imágenes múltiples"
	},
	"Scheduled Tweets cannot contain video":{
		en:"Scheduled Tweets cannot contain video",
		es:"Los tweets programados no pueden contener video"
	},
	"Direct messages cannot contain video":{
		en:"Direct messages cannot contain video",
		es:"Los mensajes directos no pueden contener video"
	},
	"Direct messages cannot be scheduled":{
		en:"Direct messages cannot be scheduled",
		es:"Los mensajes directos no pueden programarse"
	},
	"Direct messages cannot contain multiple images":{
		en:"Direct messages cannot contain multiple images",
		es:"Los mensajes directos no pueden contener múltiples imágenes"
	},
	"Quoted Tweets cannot contain images":{
		en:"Quoted Tweets cannot contain images",
		es:"Los tweets citados no pueden contener imágenes"
	},
	"Quoted Tweets":{
		en:"Quoted Tweets",
		es:"Tweets citados"
	},
	"quoted Tweets":{
		en:"quoted Tweets",
		es:"tweets citados"
	},
	"All except quoted Tweets":{
		en:"All except quoted Tweets",
		es:"Todos excepto tweets citados"
	},
	"You cannot add more than {{max}} images":{
		en:"You cannot add more than {{max}} images",
		es:"No puedes añadir más que {{max}} imagenes"
	},
	"You cannot add more than 1 image to a scheduled Tweet":{
		en:"You cannot add more than 1 image to a scheduled Tweet",
		es:"No puedes añadir más que 1 imagen a un Tweet programado"
	},
	"You cannot add more than 1 image to a message":{
		en:"You cannot add more than 1 image to a message",
		es:"No puedes añadir más que 1 imagen a un mensaje"
	},
	"You cannot add more than 1 image or video to a scheduled Tweet":{
		en:"You cannot add more than 1 image or video to a scheduled Tweet",
		es:"No puedes añadir más que 1 imagen o video a un Tweet programado"
	},
	"You cannot upload a Video with other images":{
		en:"You cannot upload a Video with other images",
		es:"No puedes subir un Video con otras imágenes"
	},
	"You cannot upload a GIF with other images":{
		en:"You cannot upload a GIF with other images",
		es:"No puedes subir un GIF con otras imágenes"
	},
	"Add another image":{
		en:"Add another image",
		es:"Añadir otra imagen"
	},
	"Processing media":{
		en:"Processing media",
		es:"Procesando los medios"
	},
	"Uploading media":{
		en:"Uploading media",
		es:"Subiendo los medios"
	},
	"You have to check the confirmation step to Tweet":{
		en:"You have to check the confirmation step to Tweet",
		es:"Tienes que verificar el paso de confirmación para Twittear"
	},
	"Scheduled time has passed":{
		en:"Scheduled time has passed",
		es:"El tiempo programado ha pasado"
	},
	"You have to select a recipient for your message":{
		en:"You have to select a recipient for your message",
		es:"Debes seleccionar un recibidor para tu mensaje"
	},
	"You have to select at least one account to Tweet from":{
		en:"You have to select at least one account to Tweet from",
		es:"Debes seleccionar al menos una cuenta para Twittear"
	},
	"Your Tweet is too long":{
		en:"Your Tweet is too long",
		es:"Tu Tweet es demasiado largo"
	},
	"That didn't work. Try copying the link from the field.":{
		en:"That didn't work. Try copying the link from the field.",
		es:"Eso no funcionó. Intenta copiar el enlace desde el campo."
	},
	"That didn't work. Try copying the text from the field.":{
		en:"That didn't work. Try copying the text from the field.",
		es:"Eso no funcionó. Intenta copiar el texto desde el campo."
	},
	"Copy":{
		en:"Copy",
		es:"Copiar"
	},
	"Link copied to clipboard":{
		en:"Link copied to clipboard",
		es:"Enlace copiado al portapapeles"
	},
	"Copy users in this list":{
		en:"Copy users in this list",
		es:"Copiar usarios en esta lista"
	},
	"Text copied to clipboard":{
		en:"Text copied to clipboard",
		es:"Texto copiado al portapapeles"
	},
	"URL":{
		en:"URL",
		es:"URL"
	},
	"Copy link":{
		en:"Copy link",
		es:"Copiar enlace"
	},
	"Copy list":{
		en:"Copy list",
		es:"Copiar lista"
	},
	"The URL of this Tweet is below.  Copy to easily share with colleagues and friends.":{
		en:"The URL of this Tweet is below.  Copy to easily share with colleagues and friends.",
		es:"La URL de este Tweet está debajo. Cópialo para compartir fácilmente con colegas y amigos."
	},
	"Profile Account":{
		en:"Profile Account",
		es:"Cuenta de Perfil"
	},
	"Search results":{
		en:"Search results",
		es:"Resultados de la búsqueda"
	},
	"match that name":{
		en:"match that name",
		es:"coincidir ese nombre"
	},
	"Preview":{
		en:"Preview",
		es:"Previsualizar"
	},
	"Include media":{
		en:"Include media",
		es:"Incluir medio"
	},
	"Developer Agreement":{
		en:"Developer Agreement",
		es:"Acuerdo de Desarrollador"
	},
	"Developer Policy":{
		en:"Developer Policy",
		es:"Política de Desarrollador"
	},
	"By embedding Twitter content in your website or app, you are agreeing to the":{
		en:"By embedding Twitter content in your website or app, you are agreeing to the",
		es:"Al integrar el contenido de Twitter en tu sitio web o aplicación, tú aceptas el"
	},
	"Include parent Tweet":{
		en:"Include parent Tweet",
		es:"Incluir el tweet al que se respondió"
	},
	"about embedded Tweets.":{
		en:"about embedded Tweets.",
		es:"sobre Tweets integrados."
	},
	"Add this Tweet to your website by copying the code below. If your CMS supports it, you can just paste in the link.":{
		en:"Add this Tweet to your website by copying the code below. If your CMS supports it, you can just paste in the link.",
		es:"Agregue este Tweet a tu sitio web por copiando el código debajo. Si tu CMS lo admite, puedes simplemente pegar el enlace."
	},
	"Like this Tweet from":{
		en:"Like this Tweet from",
		es:"Hacer Me Gusta a este Tweet de"
	},
	"Popout":{
		en:"Popout",
		es:"Salir"
	},
	"New message":{
		en:"New message",
		es:"Nuevo mensaje"
	},
	"Message":{
		en:"Message",
		es:"Mensaje"
	},
	"more":{
		en:"more",
		es:"más"
	},
	"and":{
		en:"and",
		es:"y"
	},
	"Followed by":{
		en:"Followed by",
		es:"Siguió por"
	},
	"You can't upload a GIF with other images.":{
		en:"You can't upload a GIF with other images.",
		es:"No puedes subir un GIF con otras imágenes."
	},
	"You can only include one video in a Tweet.":{
		en:"You can only include one video in a Tweet.",
		es:"Solo puedes incluir un video en un Tweet."
	},
	"You can't Tweet videos and images at the same time.":{
		en:"You can't Tweet videos and images at the same time.",
		es:"No puedes Twittear videos e imágenes al mismo tiempo."
	},
	"Translated from {{localizedLanguageName}} by {{>text/microsoft_translator_link}}":{
		en:"Translated from {{localizedLanguageName}} by {{>text/microsoft_translator_link}}",
		es:"Traducido de {{localizedLanguageName}} por {{>text/microsoft_translator_link}}"
	},
	"Version":{
		en:"Version",
		es:"Versión"
	},
	"Sent via TweetDeck":{
		en:"Sent via TweetDeck",
		es:"Enviado vía TweetDeck"
	},
	"Show more":{
		en:"Show more",
		es:"Mostrar más"
	},
	"source":{
		en:"source",
		es:"fuente"
	},
	"eg TweetSpamApp":{
		en:"eg TweetSpamApp",
		es:"eg AplicacióndeSpam"
	},
	"Muting {{getDisplayType}} {{>text/global_filter_value}}":{
		en:"Muting {{getDisplayType}} {{>text/global_filter_value}}",
		es:"Silenciando {{getDisplayType}} {{>text/global_filter_value}}"
	},
	"Translated by {{>text/microsoft_translator_link}}":{
		en:"Translated by {{>text/microsoft_translator_link}}",
		es:"Traducido por {{>text/microsoft_translator_link}}"
	},
	"One selected file is not an image.":{
		en:"One selected file is not an image.",
		es:"Un archivo seleccionado no es una imagen."
	},
	"showing images":{
		en:"showing images",
		es:"mostrando imágenes"
	},
	"showing videos":{
		en:"showing videos",
		es:"mostrando videos"
	},
	"showing GIFs":{
		en:"showing GIFs",
		es:"mostrando GIFs"
	},
	"showing links":{
		en:"showing links",
		es:"mostrando enlaces"
	},
	"showing images and videos":{
		en:"showing images and videos",
		es:"mostrando imágenes y videos"
	},
	"Or add by URL":{
		en:"Or add by URL",
		es:"O añadir por URL"
	},
	"New Tweets will appear here.":{
		en:"New Tweets will appear here.",
		es:"Nuevos Tweets aparecerán aquí."
	},
	"No recent Tweets.":{
		en:"No recent Tweets.",
		es:"No hay Tweets recientes."
	},
	"by verified users":{
		en:"by verified users",
		es:"por usarios verificados"
	},
	"all users":{
		en:"all users",
		es:"todos usarios"
	},
	" Your notification settings on <a rel=\"url noopener noreferrer\" target=\"_blank\" href=\"https://twitter.com/settings/notifications_timeline\">Twitter.com</a> may be affecting the mentions you see here ":{
		en:" Your notification settings on <a rel=\"url noopener noreferrer\" target=\"_blank\" href=\"https://twitter.com/settings/notifications_timeline\">Twitter.com</a> may be affecting the mentions you see here ",
		es:" Tus preferencias de notificación en <a rel=\"url noopener noreferrer\" target=\"_blank\" href=\"https://twitter.com/settings/notifications_timeline\">Twitter.com</a> pueden estar afectando las menciones que ves aquí "
	},
	"Large media":{
		en:"Large media",
		es:"Medios grandes"
	},
	"Medium media":{
		en:"Medium media",
		es:"Medios medianos"
	},
	"Small media":{
		en:"Small media",
		es:"Medios pequeños"
	},
	"Media preview size":{
		en:"Media preview size",
		es:"Tamaño de vista previa del medio"
	},
	"Hidden":{
		en:"Hidden",
		es:"Oculto"
	},
	"Media hidden":{
		en:"Media hidden",
		es:"Medios escondidos"
	},
	"Enable sound":{
		en:"Enable sound",
		es:"Permitir sonido"
	},
	"Sounds":{
		en:"Sounds",
		es:"Sonidos"
	},
	"Sounds and desktop notifications":{
		en:"Sounds and desktop notifications",
		es:"Sonidos y notificaciones de escritorio"
	},
	"Enable desktop notifications":{
		en:"Enable desktop notifications",
		es:"Permitir notificaciones de escritorio"
	},
	"Desktop notifications":{
		en:"Desktop notifications",
		es:"Notificaciones de escritorio"
	},
	"Mentioning":{
		en:"Mentioning",
		es:"Mencionando"
	},
	"verified users":{
		en:"verified users",
		es:"usarios verificados"
	},
	"any language":{
		en:"any language",
		es:"cualquier idioma"
	},
	"Written in":{
		en:"Written in",
		es:"Escrito en"
	},
	"Excluding":{
		en:"Excluding",
		es:"Excluyendo"
	},
	"Showing":{
		en:"Showing",
		es:"Mirando"
	},
	"No":{
		en:"No",
		es:"No"
	},
	"Enter words to exclude":{
		en:"Enter words to exclude",
		es:"Escribir las palabras para excluir"
	},
	"Enter a @name or full name":{
		en:"Enter a @name or full name",
		es:"Escribir un @nombre o nombre completo"
	},
	"Enter words to match":{
		en:"Enter words to match",
		es:"Escribir las palabras para coincidir"
	},
	"Share":{
		en:"Share",
		es:"Compartir"
	},
	"Clear":{
		en:"Clear",
		es:"Aclarar"
	},
	"Dataminr settings":{
		en:"Dataminr settings",
		es:"Ajustes Dataminr"
	},
	"Edit collection":{
		en:"Edit collection",
		es:"Editar la colección"
	},
	"Edit list":{
		en:"Edit list",
		es:"Editar la lista"
	},
	"Lists":{
		en:"Lists",
		es:"Listas"
	},
	"Subscribed to":{
		en:"Subscribed to",
		es:"Suscrito a"
	},
	"Your lists":{
		en:"Your lists",
		es:"Tus listas"
	},
	"Your collections":{
		en:"Your collections",
		es:"Tus collecciones"
	},
	"collections":{
		en:"collections",
		es:"collecciones"
	},
	"Create collections":{
		en:"Create collections",
		es:"Crear collecciones"
	},
	"Create collection":{
		en:"Create collection",
		es:"Crear collección"
	},
	"lists":{
		en:"lists",
		es:"listas"
	},
	"All except lists":{
		en:"All except lists",
		es:"Todos excepto listas"
	},
	"Traducido del {{localizedLanguageName}} por {{>text/microsoft_translator_link}}":{
		en:"Traducido del {{localizedLanguageName}} por {{>text/microsoft_translator_link}}",
		es:"Traducido del {{localizedLanguageName}} por {{>text/microsoft_translator_link}}"
	},
	"Undo Retweet":{
		en:"Undo Retweet",
		es:"Deshacer el Retweet"
	},
	"Report Tweet":{
		en:"Report Tweet",
		es:"Reportar Tweet"
	},
	"Report @{{screenName}}":{
		en:"Report @{{screenName}}",
		es:"Reportar @{{screenName}}"
	},
	"Block @{{screenName}}":{
		en:"Block @{{screenName}}",
		es:"Bloquear @{{screenName}}"
	},
	"Unmute @{{screenName}}":{
		en:"Unmute @{{screenName}}",
		es:"Dejar de silenciar @{{screenName}}"
	},
	"Mute @{{screenName}}":{
		en:"Mute @{{screenName}}",
		es:"Silenciar @{{screenName}}"
	},
	"Unmute this conversation":{
		en:"Unmute this conversation",
		es:"Dejar de silenciar esta conversación"
	},
	"Mute this conversation":{
		en:"Mute this conversation",
		es:"Silenciar esta conversación"
	},
	"See who quoted this Tweet":{
		en:"See who quoted this Tweet",
		es:"Ver quién citó este Tweet"
	},
	"Add or remove from lists…":{
		en:"Add or remove from lists…",
		es:"Añadir o eliminar de listas…"
	},
	"Like from accounts…":{
		en:"Like from accounts…",
		es:"Me Gusta de las cuentas…"
	},
	"Tweet to @{{screenName}}":{
		en:"Tweet to @{{screenName}}",
		es:"Twittear a @{{screenName}}"
	},
	"Share via Email":{
		en:"Share via Email",
		es:"Compartir via e-mail"
	},
	"Share via Direct Message":{
		en:"Share via Direct Message",
		es:"Compartir via mensaje directo"
	},
	"Copy link to this Tweet":{
		en:"Copy link to this Tweet",
		es:"Copiar enlace para Tweet"
	},
	"Copy link to Tweet":{
		en:"Copy link to Tweet",
		es:"Copiar enlace para Tweet"
	},
	"Embed this Tweet":{
		en:"Embed this Tweet",
		es:"Integrar este Tweet"
	},
	"Retweet this to your followers?":{
		en:"Retweet this to your followers?",
		es:"¿Retwittear esto a tus seguidores?"
	},
}

var mustachePatches = {
	"keyboard_shortcut_list.mustache":{
		"Actions":1,
		"Reply":1,
		"Retweet":1,
		"New Tweet":1,
		"Direct message":1,
		"View user profile":1,
		"Close Tweet Details":1,
		"Send Tweet":1,
		"Enter":1,
		"Backspace":1,
		"Ctrl":1,
		"Add Column":1,
		"This menu":1,
		"Right":1,
		"Left":1,
		"Down":1,
		"Up":1,
		"Navigation":1,
		"Column 1－9":1,
		"Final column":1,
		"Expand/Collapse navigation":1,
		"Search":1
	},
	"compose/docked_compose.mustache":{

	},
	"version.mustache":{
		"Version":1
	},
	"menus/search_location_form.mustache":{
		"Type in a location":1
	},
	"lists/edit_list_details.mustache":{
		"Under 100 characters, optional":1
	},
	"customtimeline/edit_customtimeline.mustache":{
		"Under 160 characters, optional":1
	},
	"column_loading_placeholder.mustache":{
		"}}Loading":1,
		"}}Updating":1
	},
	"login/promo_for_login_form.mustache":{
		"Tweet like a pro.":1
	},
	"column/column_options.mustache":{
		"Remove":1
	}
}

var miscStrings = {
	TDApi:1
}

var translateFunction = function(a,b,c) {
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

function patchTDi() {
	if (typeof TD !== "undefined") {
		TD.i = translateFunction;
	} else {
		console.log("Waiting for TD to be ready...");
		setTimeout(patchTDi,0);
		return;
	}
}

function patchColumnTitle() {
	if (typeof TD !== "undefined" && typeof mR !== "undefined") {
		var columnData = mR.findFunction("getColumnTitleArgs")[0].columnMetaTypeToTitleTemplateData;
		for (var key in columnData) {
			columnData[key].title = translateFunction(columnData[key].title);
		}
	} else {
		console.log("Waiting for mR to be ready...");
		setTimeout(patchColumnTitle,0);
		return;
	}
}

function patchButtonText() {
	if (typeof TD !== "undefined" && typeof mR !== "undefined") {
		var buttonData = mR.findFunction("tooltipText");
		for (var i=0;i<buttonData.length;i++) {
			if (typeof buttonData[i].buttonText !== "undefined") {
				for (var key in buttonData[i].buttonText) {
					buttonData[i].buttonText[key] = translateFunction(buttonData[i].buttonText[key]);
				}
			} 
			for (var key in buttonData[i].tooltipText) {
				buttonData[i].tooltipText[key] = translateFunction(buttonData[i].tooltipText[key]);
			}
		}
	} else {
		console.log("Waiting for mR to be ready...");
		setTimeout(patchButtonText,0);
		return;
	}
}

function patchColumnTitleAddColumn() {
	if (typeof TD !== "undefined" && typeof TD.controller !== "undefined" && typeof TD.controller.columnManager !== "undefined" && typeof TD.controller.columnManager.DISPLAY_ORDER !== "undefined") {
		var columnData = TD.controller.columnManager.DISPLAY_ORDER;
		for (var key in columnData) {
			columnData[key].title = translateFunction(columnData[key].title);
		}
	} else {
		console.log("Waiting for DISPLAY_ORDER and etc to be ready...");
		setTimeout(patchColumnTitleAddColumn,0);
		return;
	}
}

function patchMustaches() {
	if (typeof TD_mustaches !== "undefined") {
		for (var key in mustachePatches) {
			if (typeof TD_mustaches[key] !== "undefined") {
				for (var key2 in mustachePatches[key]) {
					TD_mustaches[key] = TD_mustaches[key].replace(key2,translateFunction(key2))
				}
			} else {
				console.log("what the heck, where is mustache "+key+"?");
			}
		}
	} else {
		console.log("Waiting on TD_mustaches...");
		setTimeout(patchMustaches,0);
		return;
	}
}

function patchMiscStrings() {
	for (var key in miscStrings) {
		switch(key){
			case "TDApi":
			if (typeof TD !== "undefined" && typeof TD.constants !== "undefined" && typeof TD.constants.TDApi !== "undefined") {
				for (var key2 in TD.constants.TDApi) {
					TD.constants.TDApi[key2] = translateFunction(key2);
				}
			} else {
				console.log("Waiting on TDApi...");
				setTimeout(patchMiscStrings,0);
				return;
			}
			
			break;
		}
	}
}

patchTDi();
patchColumnTitle();
patchButtonText();
patchColumnTitleAddColumn();
patchMustaches();
patchMiscStrings();