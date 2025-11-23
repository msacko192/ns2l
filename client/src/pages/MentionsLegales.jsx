import React from 'react'
import FadeInAnimation from '../components/animations/FadeInAnimation'
import SlideInAnimation from '../components/animations/SlideInAnimation'
import useSEO from '../hooks/useSEO'

const MentionsLegales = () => {
  useSEO({
    title: "Mentions légales",
    description: "Mentions légales du site NS2L & Associés. Informations légales, conditions d'utilisation, propriété intellectuelle et gestion des données personnelles.",
    keywords: "mentions légales, conditions utilisation, RGPD, propriété intellectuelle, NS2L",
    canonical: "https://ns2l-associes.fr/mentions-legales"
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInAnimation delay={0}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Mentions légales
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Informations légales et conditions d'utilisation du site www.ns2l.com
              </p>
            </div>
          </FadeInAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideInAnimation direction="up" delay={0.2}>
            <div className="bg-white rounded-lg border shadow-lg p-8 md:p-12 space-y-8">

              {/* Introduction */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.ns2l.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                </p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p><strong>Propriétaire :</strong> NS2L & ASSOCIÉS</p>
                  <p><strong>Créateur :</strong> Moussa Sacko</p>
                  <p><strong>Responsable publication :</strong> NS2L & ASSOCIÉS</p>
                  <p className="text-sm">Le responsable publication est une personne physique ou une personne morale</p>
                  <p><strong>Hébergeur :</strong> IONOS</p>
                </div>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Conditions générales d'utilisation du site et des services proposés
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    L'utilisation du site www.ns2l.com implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site www.ns2l.com sont donc invités à les consulter de manière régulière.
                  </p>
                  <p>
                    Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par NS2L & ASSOCIÉS, qui s'efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l'intervention.
                  </p>
                  <p>
                    Le site www.ns2l.com est mis à jour régulièrement. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s'imposent néanmoins à l'utilisateur qui est invité à s'y référer le plus souvent possible afin d'en prendre connaissance.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Description des services fournis
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Le site www.ns2l.com a pour objet de fournir une information concernant l'ensemble des activités de NS2L & ASSOCIÉS.
                  </p>
                  <p>
                    NS2L & ASSOCIÉS s'efforce de fournir sur le site www.ns2l.com des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                  </p>
                  <p>
                    Tous les informations indiquées sur le site www.ns2l.com sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site www.ns2l.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                  </p>
                  <p>
                    Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Propriété intellectuelle et contrefaçons
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    NS2L & ASSOCIÉS est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les contenus rédactionnels accessibles sur le site.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de NS2L & ASSOCIÉS.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Limitations de responsabilité
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    NS2L & ASSOCIÉS ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.ns2l.com, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                  <p>
                    NS2L & ASSOCIÉS ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site www.ns2l.com.
                  </p>
                  <p>
                    Des espaces interactifs (possibilité de poser des questions dans l'espace contact) sont à la disposition des utilisateurs. NS2L & ASSOCIÉS se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, NS2L & ASSOCIÉS se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Gestion des données personnelles
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                  </p>
                  <p>
                    A l'occasion de l'utilisation du site www.ns2l.com, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site www.ns2l.com, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
                  </p>
                  <p>
                    En tout état de cause NS2L & ASSOCIÉS ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site www.ns2l.com. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site www.ns2l.com l'obligation ou non de fournir ces informations.
                  </p>
                  <p>
                    Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
                  </p>
                  <p>
                    Aucune information personnelle de l'utilisateur du site www.ns2l.com n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de NS2L & ASSOCIÉS et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site www.ns2l.com.
                  </p>
                  <p>
                    Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Liens hypertextes et cookies
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Le site www.ns2l.com contient un certain nombre de liens hypertextes vers d'autres sites. Cependant, NS2L & ASSOCIÉS n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
                  </p>
                  <p>
                    La navigation sur le site www.ns2l.com est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
                  </p>
                  <p>
                    Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies :
                  </p>
                  <div className="pl-4 space-y-3">
                    <p>
                      <strong>Sous Internet Explorer :</strong> onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
                    </p>
                    <p>
                      <strong>Sous Firefox :</strong> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.
                    </p>
                    <p>
                      <strong>Sous Safari :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.
                    </p>
                    <p>
                      <strong>Sous Chrome :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité », cliquez sur préférences. Dans l'onglet « Confidentialité », vous pouvez bloquer les cookies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Droit applicable et attribution de juridiction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Tout litige en relation avec l'utilisation du site www.ns2l.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">
                  Les principales lois concernées
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
                  <p>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
                </div>
              </div>

              {/* Lexique */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h3 className="text-xl font-bold text-black mb-4">
                  Lexique
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.
                  </p>
                  <p>
                    <strong>Informations personnelles :</strong> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                  </p>
                </div>
              </div>

            </div>
          </SlideInAnimation>
        </div>
      </section>
    </div>
  )
}

export default MentionsLegales
