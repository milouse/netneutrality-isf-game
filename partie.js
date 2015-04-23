var colour = ['#E62240', '#F0A11D', '#879516', '#571942', '#096569'];
var card_categories = ['Parlement', 'Hacktiviste', 'Entreprises'];
var cards = {
    'Hacktiviste': [
        {
            title: 'Affaire Snowden',
            content: "Un analyste à la CIA, révèle que les USA espionne les entreprises.",
            actions: "<li>Les membres de l'équipe entreprise perdent 2k€</li>"
        },
        {
            title: "La critique caymal",
            content: "En janvier 2009, Wikileaks a publié une liste tenue par l'administration  finlandaise de 800 noms de domaines bannis par la plus part des  fournisseurs d'accès du pays. Parmi ces sites apparaît http://lapsiporno.info, dont l'objet est de s'opposer à la censure en ligne et qui ne présente aucune image sensible.<br>[Wikileaks, 05.01.2009]",
            actions: "<li>La moitié du Nord passe en censure</li>",
            prerequisits: "<li>Joueurs du Nord/Sud</li>"
        },
        {
            title: 'Anonymous à la rescousse',
            content: "Suite à l'incarcération scandaleuse d'un blogueur au Timor oriental, les anonymous répliquent en masse son site internet",
            actions: "<li>Les blogueurs politiques du Sud gagnent 2 articles.</li>",
            prerequisits: "<li>Blogueurs politiques/hobby</li><li>Blogueur du Sud/Nord</li>"
        },
        {
            title: 'Libérez les chatons',
            content: "La quadrature du Net a réussi sa levée de fond.",
            actions: "<li>Le niveau revient à Neutre pour les blogueurs du Nord.</li><li>Le niveau revient à Neutre pour les Michus du Nord.</li>",
            prerequisits: "<li>Blogueur du Sud/Nord</li><li>Michus du Sud/Nord</li>"
        },
        {
            title: 'Télécomix',
            content: "Les militants de télécomix fournissent des « tunnels » anonymes pour raccorder les militans syriens à internet en dépit de l'état qui bride et surveille le réseau.",
            actions: "<li>Les blogueurs politiques du Sud gagnent 2 articles.</li><li>Les Michus geek du Sud gagnent 2 lolz.</li>",
            prerequisits: "<li>Blogueurs politiques/hobby</li><li>Blogueur du Sud/Nord</li><li>Michus geek/pas geek</li><li>Michus du Sud/Nord</li>"
        },
        {
            title: "Don't be evil",
            content: "Google met en place un numéro de téléphone gratuit permettant aux égyptiens de tenir le monde informé de ce qui se passe place Tahrir.",
            actions: "<li>Les blogueurs du Sud gagnent 2 articles.</li>",
            prerequisits: "<li>Blogueurs politiques/hobby</li><li>Blogueur du Sud/Nord</li>"
        },
        {
            title: "L'oignon pour vous sauver",
            content: "Le logiciel Tor permet de naviguer anonymement sur internet.",
            actions: "<li>Les blogueurs gagnent 2 articles.</li>"
        },
        {
            title: 'Zut, on a perdu nos jumelles',
            content: "Philip Zimmermann, développeur original de PGP, une solution de cryptage libre, gagne en 1996 sa bataille contre le gouvernement US : le cryptage n'est plus reconnu comme une arme de guerre et cette méthode peut donc être exportée et servir dans des échanges depuis et vers les US.<br>[<a href=\"http://fr.wikipedia.org/wiki/PGP\">http://fr.wikipedia.org/wiki/PGP</a>]",
            actions: "<li>Les blogueurs gagnent 2 articles</li><li>Les entreprises gagnent 8k€</li>"
        }
    ],
    'Entreprises': [
        {
            title: 'Sanction pédagogique',
            content: "Renater décide de bloquer Youtube.",
            actions: "<li>Le niveau censure est maximal pour les Michus de moins de 25 ans.</li>",
            prerequisits: "<li>Michus de < 25 ans / > 25 ans.</li>"
        },
        {
            title: "C'est mieux comme ça",
            content: "SFR modifie le contenu des pages renvoyés vers les dispositifs mobiles. <br>[<a href=\" http://reflets.info/3g-sfr-oui-sfr-altere-bien-mon-experience-utilisateur-et-pire-encore-il-altere-mes-usages-professionnels/\">http://reflets.info/3g-sfr-oui-sfr-altere-bien-mon-experience-utilisateur-et-pire-encore-il-altere-mes-usages-professionnels/</a>]",
            actions: "<li>Niveau censure pour les Michus < 25 ans</li><li>Niveau censure pour les entreprises</li>",
            prerequisits: "<li>Michus de < 25 ans / > 25 ans.</li>"
        },
        {
            title: "Partenariat FAI/fournisseur de services",
            content: "Free bride le débit de Youtube",
            actions: "<li>Les gros FAI gagnent 2k€, puis perd 1k€ par tour jusqu'à ce qu'une autre carte Entreprise soit tirée</li>",
            prerequisits: "<li>Entreprises FAI grand public / spécialisés / autre</li>"
        },
        {
            title: 'Trafic différencié',
            content: "Orange passe un partenariat avec Deezer pour proposer un forfait « illimité » vers Deezer",
            actions: "<li>La moitié des joueurs Deezer/netflix perdent des k€</li><li>L'autre moitié des joueurs Deezer/netflix perdent des k€</li><li>Les Michus < 25ans gagne du lulz</li><li>Les Michus > 25 perdent du lulz</li>",
            prerequisits: "<li>Michus de < 25 ans / > 25 ans.</li><li>Entreprises FAI grand public / spécialisés / autre</li><li>Dans les entreprises « autres », entreprises multimedia (type Deezer/Netflix) / autre</li>"
        },
        {
            title: 'Pan, dans ton annu',
            content: "Iliad intente des procès à tous les sites dont le nom comporte le terme « annu ».",
            actions: "<li>Les blogueurs du Nord perdent un article</li>",
            prerequisits: "<li>Blogueur du Sud/Nord</li>"
        },
        {
            title: 'Indiscrétion',
            content: "Orange reconnaît que le câble transatlantique est espionné par la NSA.",
            actions: "<li>Les entreprises du Nord perdent des k€.</li>",
            prerequisits: "<li>Entreprises du Sud/Nord</li>"
        },
        {
            title: 'Responsabilité des FAI',
            content: "La comission européenne fait adopter un package de lois : d'un côté elle impose la fin des frais de roaming (plus de surcout téléphonique en déplacement à l'étranger), de l'autre elle demande aux FAI de prendre « toutes les mesures visant à empêcher les usages illégaux via leur réseau ».",
            actions: "<li>Tous les joueurs du Nords passent en mode censure.</li><li>Les Michus du Nord perdent 2 lulz</li><li>Les entreprises du Nord perdent 2k€.</li>",
            prerequisits: "<li>Entreprises du Sud/Nord</li><li>Michus du Sud/Nord</li>"
        },
        {
            title: 'Blocage',
            content: "Orange empêche ses clients d'héberger un serveur mail sur leur connexion par une limitation technique (port 25 bloqué)",
            actions: "<li>Le Michu geek du Nord perd 2 lulz</li><li>La moitié des petites entreprises du Nord perdent 2k€</li><li>Les joueurs du Nord les plus âgés gagnent 2 lulz (moins de spam)</li>",
            prerequisits: "<li>Michus de < 25 ans / > 25 ans.</li><li>Michus du Nord/Sud</li><li>Entreprises du Nord/Sud</li><li>PME/Grand compte</li>"
        },
        {
            title: 'Cachez donc ce sein que je ne saurais voir',
            content: "Facebook a une approche très pudibonde de ce qui est bien ou mal de partager sur les intertubes. Les tétons ne sont ainsi pas les bienvenus du tout et peuvent conduire à la suppression pure et simple des messages contenant de tels photos. Seulement s'ils sont publique ? Que nenni. Facebook sait aussi regarder dans vos messages persos et supprimer ce qui le gène.<br>[<a href=\"http://www.geek.com/news/facebooks-new-email-service-is-censoring-links-to-the-pirate-bay-1296189/\">http://www.geek.com/news/facebooks-new-email-service-is-censoring-links-to-the-pirate-bay-1296189/</a>].",
            actions: "<li>Les Michus perdent 2 lulz</li>"
        },
        {
            title: "Mirlaine lave plus blanc quand c'est moi qui le dit",
            content: "Un FAI américain se permet de remplacer les publicités présentes sur les sites Web par ses propres pubs. Les FAI gagnent des k€ et les petites PME en perdent.<br>[<a href=\"http://bluetouff.com/2013/04/12/comment-des-fai-americains-injectent-et-remplacent-des-publicites-dans-les-pages-web-contre-la-volonte-des-editeurs-des-sites/\">http://bluetouff.com/2013/04/12/comment-des-fai-americains-injectent-et-remplacent-des-publicites-dans-les-pages-web-contre-la-volonte-des-editeurs-des-sites/</a>]",
            actions: "<li>Les petites entreprises perdent 2k€</li>",
            prerequisits: "<li>PME/Grand compte</li>"
        },
        {
            title: "Le temps de cerveau disponible... pas chez nous",
            content: "Free active le blocage de la publicité par défaut sur les freebox (et reviendra en arrière ensuite)",
            actions: "<li>Curseur à censure pour les joueurs du Nord</li><li>Les entreprises perdent 2k€</li><li>Les Michus gagnent 2 lulz, puis perdent 1 lulz par tour de jeu jusqu'à ce que la prochaine carte Entreprises soit tirée.</li>",
            prerequisits: "<li>Joueur du Nord/Sud</li>"
        }
    ],
    'Parlement': [
        {
            title: 'NetNeut in da law',
            content: "La slovénie est le deuxième pays européen à inscrire la net-neutralité dans la loi. En réaction à des pratiques commerciales anti-net-neutralité <br>[<a href=\"http://www.revivall.org/article-la-neutralite-du-net-en-slovenie-le-deuxieme-pays-de-l-ue-interdit-la-discrimination-des-services-i-115002404.html\">http://www.revivall.org/article-la-neutralite-du-net-en-slovenie-le-deuxieme-pays-de-l-ue-interdit-la-discrimination-des-services-i-115002404.html</a>]",
            actions: "<li>Les joueurs du Nord reviennent en neutre.</li><li>La moitié des gros FAI du Nord perdent 2k€.</li>",
            prerequisits: "<li>Entreprises du Nord/Sud</li><li>Entreprises FAI grand public / spécialisés / autre</li>"
        },
        {
            title: 'French touch',
            content: "Le parlement français profite de la transcription de la résolution européenne dans le droit local pour mettre en place une autorité de régulation d'accès à la culture.",
            actions: "<li>Désormais, les Michus du Nord ne reçoivent que la moitié des Lulz promis</li>",
            prerequisits: "<li>Michus du Nord/Sud</li>"
        },
        {
            title: "I'm very, very, disapoiiinted",
            actions: "<li>La moitié des blogueurs politiques du Sud vont en prison, tant qu'une carte ne les délivre pas</li><li>Le Sud passe en niveau censure</li>",
            prerequisits: "<li>Blogueurs du Nord/Sud</li><li>Blogueurs politiques / autre</li>"
        },
        {
            title: "I'm very, very, disapoiiinted",
            actions: "<li>La moitié des blogueurs politiques du Nord vont en prison, tant qu'une carte ne les délivre pas</li><li>Le Nord passe en niveau censure</li>",
            prerequisits: "<li>Blogueurs du Nord/Sud</li><li>Blogueurs politiques / autre</li>"
        },
        {
            title: "Grâce présidentielle (merci les élections)",
            actions: "<li>Les blogueurs emprisonnés sont libérés</li><li>Tous les joueurs passent en niveau median</li>"
        },
        {
            title: "C'est pour ton bien",
            content: "Le parlement Australien adopte le principe (pour lutter contre le pédoporno), de blocage de site par nom de domaine sur notification du ministère de la sécurité intérieure. Plein de sites sont bloqués dont plusieurs sites à tendance politique.<br>[<a href=\"http://www.laquadrature.net/wiki/Surblocage\">http://www.laquadrature.net/wiki/Surblocage</a>]",
            actions: "<li>Tous les blogueurs perdent 2 articles</li><li>La moitié des Michus perdent 2 lulz (site bloqué).</li><li>Le quart des entreprise se font bloquer par erreur et perdent 2k€.</li>"
        },
        {
            title: 'Et pourtant on a fait gaffe',
            content: "Le parlement Anglais décide de bloquer les sites pornographiques. Par erreur et durant une journée sur les deux principaux FAI du pays plusieurs pages wikipedia ne sont plus accessibles (il s'agissait d'articles médicaux sur l'anatomie humaine...).<br>[<a href=\"http://www.laquadrature.net/wiki/Surblocage\">http://www.laquadrature.net/wiki/Surblocage</a>]",
            actions: "<li>La moitié des Michus du Nord perdent 2 lulz</li><li>Un quart des FAI tout public du Nord perdent 2k€ (des clients)</li><li>Un quart des FAI spécialisés du Nord gagnent 2k€ car non bloqués</li>",
            prerequisits: "<li>Michus du Nord/Sud</li><li>Entreprises du Nord/Sud</li><li>Entreprises FAI grand public / spécialisés / autre</li>"
        },
        {
            title: "Les fleurs, c'est joli aussi",
            content: "L'internet chinois est particulièrement bien censuré. Une simple recherche google image avec le mot clés TienAmen renvoie principalement de jolies vues fleuries de cette place, là où pour le reste du monde sont surtout visible des images d'archives des manifestations.",
            actions: "<li>La moitié des joueurs du Sud perdent 2 lulz/k€/articles</li><li>La moitié des joueurs du Sud placent leur curseur à censure</li><li>1 entreprise du Sud au hasard gagne 2k€ (fournisseurs du service)</li>",
            prerequisits: "<li>Joureurs du Nord/Sud</li>"
        },
        {
            title: '404 ammar',
            content: "La tunisie de Ben Ali filtre systématiquement tout le contenu Internet, et présente des « erreurs 404 » factices sur tout un tas de mots clés.<br>[<a href=\"http://owni.fr/2011/01/14/tunisie-petite-histoire-illustree-d-ammar/\">http://owni.fr/2011/01/14/tunisie-petite-histoire-illustree-d-ammar/</a>]",
            actions: "<li>La moitié des joueurs du Sud perdent 2 lulz/k€/articles</li><li>La moitié des joueurs du Sud placent leur curseur à censure</li><li>Les entreprises du Nord gagnent 2k€ (fournisseurs du service)</li>",
            prerequisits: "<li>Joureurs du Nord/Sud</li>"
        },
        {
            title: 'Erdogan Vs Twitter',
            content: "Le premier ministre de turc vient de faire interdire et bloquer Twitter pour masquer la diffusion de preuves de sa propre corruption",
            actions: "<li>La moitié du Nord passe en censure</li><li>Les Michus du Nord de < 25 ans perdent 2 lulz</li>",
            prerequisits: "<li>Michus de < 25 ans / > 25 ans.</li><li>Joueurs du Nord/Sud</li>"
        }
    ]
};
var current_category = null;
var current_card = null;

function pioche_category(){
    var indice = Math.floor(Math.random() * card_categories.length);
    current_category = card_categories[indice];
    $('#dice_category').text(current_category);
    $('#dice_category').css('background-color', colour[indice]);
    $('#dice_category').css('border-color', colour[indice]);
}

function pioche_card(){
    if (current_category != null){
        $('#actions').hide();
        $('#prerequisits').hide();
        var indice = Math.floor(Math.random() * cards[current_category].length);
        current_card = cards[current_category][indice];
        $('#dice_card').text('Carte n° ' + (indice + 1));
        $('#card h1').text(current_card.title);
        $('#card p').html(current_card.content);
        if (current_card.prerequisits && current_card.prerequisits != '') {
            $('#prerequisits').show();
            $('#prerequisits').html(current_card.prerequisits);
            var show_actions = document.createElement('LI');
            show_actions.setAttribute('id', 'show_action');
            show_actions.innerHTML = 'Actions';
            show_actions.onclick = function(){
                $('#prerequisits').hide();
                $('#actions').show();
            };
            $('#prerequisits').append($(show_actions));
        }else{
            $('#actions').show();
        }
        $('#actions').html(current_card.actions);
    }else{
        pioche_category();
        pioche_card();
    }
    current_category = null;
}

$(document).ready(function(){
    $('#actions').hide();
    $('#prerequisits').hide();

   $('#dice_category').click(function(){
       pioche_category();
   });
   $('#dice_card').click(function(){
       pioche_card();
   });
});
