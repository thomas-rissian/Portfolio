AUTHOR = 'Thomas Rissian'
SITENAME = 'Mon ePortfolio'
SITEURL = ''

OUTPUT_PATH = 'public'
PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'fr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

#Ajout 
THEME = 'themes/mon-theme-pelican'
CSS_FILE = 'style.css'

CLASSE = "BUT Informatique Graphique"

MENU = (
	('accueil', 'Accueil'),
	('propos', 'À propos'),
	('competences', 'Mes compétences'),
    ('contributions','Mes contributions / réalisations professionnelles'),
	('contact', 'Contact')
)
FOND_IMG ="images/theme/background.jpg"

TITRE_SECTION = ("À propos",
                "Mes Compétences",
                "Mes contributions / réalisations professionnelles",
                "Mes Contacts"
)


COMPETENCES = (

    ('B1.1 : Gérer le patrimoine informatique',
        (
            ('B1.1.1 ','B1.1.1 : Recenser et identifier les ressources numériques', 'acquis',
             (
                ("glpi","OCS Inventory et GLPI"),
             )
             ),

            ('B1.1.2 ','B1.1.2 : Exploiter des référentiels, normes et standards adoptés par le prestataire informatique','acquis',
             (
                ("creationSessionSNCF","création des sessions dans le contexte de formation de la SNCF"),
                ("correctionIncidentAmap1a","correction d'incident du site de gestion des contrats AMAP Auvergne"),
                ("appeloffrepcfixesetportable","appel d'offres pc fixes et portables"),
                ("preparationmiseenreseausalle","préparation mise en réseau d'une salle"),
                ("AmapPhp2c","Gestion des contrats de l'application AMAP Auvergne itération 2c"),
             )
             
             ),
             ('B1.1.3','B1.1.3 : Mettre en place et vérifier les niveaux d’habilitation associés à un service','acquis',
             (
                ("AmapPhp2c","Gestion des contrats de l'application AMAP Auvergne itération 2c"),
             )
                
             )
        )
    ),
    ('B1.2 : Répondre aux incidents et aux demandes d’assistance et d’évolution',
        (
            ('B1.2.1 ','B1.2.1 : Collecter, suivre et orienter des demandes', 'acquis',
             (
                ("creationSessionSNCF","création des sessions dans le contexte de formation de la SNCF"),
                ("correctionIncidentAmap1a","correction d'incident du site de gestion des contrats AMAP Auvergne"),
                ("glpi","OCS Inventory et GLPI"),
             )
             ),
             ('B1.2.2','B1.2.2 : Traiter des demandes concernant les services réseau et système, applicatifs','acquis',
              (
                ("appeloffrepcfixesetportable","appel d'offres pc fixes et portables"),   
                ("preparationmiseenreseausalle","préparation mise en réseau d'une salle"),
                ("glpi","OCS Inventory et GLPI"),
              )
                
             ),
            ('B1.2.3','B1.2.3 : Traiter des demandes concernant les applications','acquis',
             (
                ("creationSessionSNCF","création des sessions dans le contexte de formation de la SNCF"),
                ("correctionIncidentAmap1a","correction d'incident du site de gestion des contrats AMAP Auvergne"),
                ("AmapPhp2c","Gestion des contrats de l'application AMAP Auvergne itération 2c"),
                ("stage1Amaliage","Mission 1er stage : Modification Amaliage"),
                ("Stage1CorrectionIntranet","Mission 1er stage : Correction intranet"),
                ("Stage1MailAuto","Mission 1er stage : Mail automatique"),
                ("stage1ModifClefTransporeon","Mission 1er stage : Modification clé transporteur"),
                ("pdfDolibarr","Mission 2nd stage : Création modèle PDF dolibarr"),
             )
             
             ),
        )
    ),
    ('B1.3 : Développer la présence en ligne de l’organisation',
        (
            ('B1.3.1','B1.3.1 : Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques', 'acquis',
             (
                ("AmapDjangoCms","Site vitrine du réseau AMAP Auvergne avec Django CMS"),
             )
             ),
             ('B1.3.3','B1.3.3 : Participer à l’évolution d’un site Web exploitant les données de l’organisation', 'acquis',
             (
                ("AmapDjangoCms","Site vitrine du réseau AMAP Auvergne avec Django CMS"),
             )
             ),

        )
    ),
    ('B1.4 : Travailler en mode projet',
        (
            ('B1.4.1','B1.4.1 : Analyser les objectifs et les modalités d’organisation d’un projet', 'acquis',
                (
                    ("creationSessionSNCF","création des sessions dans le contexte de formation de la SNCF"),
                    ("correctionIncidentAmap1a","correction d'incident du site de gestion des contrats AMAP Auvergne"),
                )
             ),
             ('B1.4.2','B1.4.2 : Planifier les activités', 'acquis',
                (
                    ("AmapPhp2c","Gestion des contrats de l'application AMAP Auvergne itération 2c"),
                )
             ),

        )
    ),
    ('B1.5 : Mettre à disposition des utilisateurs un service informatique',
        (
             ('B1.5.2','B1.5.2 : Déployer un service', 'acquis',
                (
                    ("pdfDolibarr","Mission 2nd stage : Création modèle PDF dolibarr"),
                )
             ),
             ('B1.5.3','B1.5.3 : Accompagner les utilisateurs dans la mise en place d’un service', 'acquis',
                (
                    ("glpi","OCS Inventory et GLPI"),
                )
             ),

        )
    ),
    ('B1.6 : Organiser son développement professionnel',
        (
            ('B1.6.2','B1.6.2 Mettre en œuvre des outils et stratégies de veille informationnelle', 'acquis',
             (
                ("AmapPhp2c","Gestion des contrats de l'application AMAP Auvergne itération 2c"),
             )
            ),
            ('B1.6.3','B1.6.3 Gérer son identité professionnelle', 'acquis',
             (
                ("cv&motivation","Mission CV & motivation"),
                ("recherchemetier","recherches métiers / rédaction CV / mail motivé "),
             )
            ),
            ('B1.6.4','B1.6.4 Développer son projet professionnel','acquis',
             (
                ("decouverteMetier","Découverte des métiers"),
                ("recherchemetier","recherches métiers / rédaction CV / mail motivé "),
             )
             ),
        )
    )
    
)

CHAMPS_CONTACT = (
    ('E-mail','Thomas.risian@proton.me'),
)
