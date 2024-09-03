import styles from './About.module.scss';
import SpecialistCard from '../../components/widgets/specialistCard/index.jsx';

const specialists = [
	{
    src: '/specialist-1.jpg',
    title: 'Oleg Bäder',
    info: 'Dipl. Psychologe, Kampfsporttrainer und Vater eines autistischen Kindes.',
    description: 'Es war nicht geplant, dass ich mich auf die Therapie von Autismus spezialisiere, doch als mein zweiter Sohn diese Diagnose erhielt, änderte sich alles. Als Diplom-Psychologe und Vater eines autistischen Kindes kenne ich die Herausforderungen, mit denen betroffene Familien konfrontiert sind, besser als viele andere. Meine persönliche Geschichte offenbart zahlreiche Fehler, die Eltern von Kindern mit einer ASS-Diagnose häufig machen. Anstatt proaktiv zu handeln, versuchen viele, sich mit „positivem“ Denken zu beruhigen, wodurch sie wertvolle Zeit verlieren, die für regelmäßige und systematische therapeutische Maßnahmen genutzt werden könnte.\n' +
	    '\n' +
	    'Selbst ein Diplom-Psychologe, der gut vernetzt ist und mit seinen Kollegen zusammenarbeitet, kann diesen gravierenden Fehler begehen. Ein zentrales Problem besteht darin, dass viele „Therapeuten“ die bewilligten Stunden ausschließlich mit autistischen Kindern verbringen, anstatt deren Eltern zu zeigen, wie sie systematisch zu Hause mit ihren Kindern arbeiten können und diese Elternarbeit zu begleiten. Dabei liegt eine große Chance darin, die Symptomatik zu mindern: Wenn Eltern frühzeitig mit der Behandlung beginnen und diese regelmäßig sowie systematisch durchführen.'
  },
  {
    src: '/specialist-2.jpg',
    title: 'Michael Belokon',
    info: 'Diplom-Sportlehrer und ehemaliger Nationaltrainer der usbekischen Judo-Nationalmannschaft',
    description: 'Als Judo-Trainer mit langjähriger Erfahrung kann ich mit Überzeugung sagen, dass keine andere Sportart das Selbstwertgefühl von Kindern so sehr steigern kann wie der Kampfsport. In Deutschland habe ich begonnen, Kinder mit autistischen Störungen zu trainieren. Diese Kinder benötigen ein starkes Selbstwertgefühl oft mehr als andere. Sie spüren, dass sie besonders betrachtet werden, und ihr Mut, sich zu kommunizieren und neue Entscheidungen zu treffen, kann dadurch noch weiter sinken.\n' +
	    '\n' +
	    'Aus diesem Grund behandle ich autistische Kinder im Training wie alle anderen. Ich lobe sie, wenn sie die Übungen gut ausführen, und weise sie freundlich darauf hin, wenn sie Schwierigkeiten haben. Diese Kinder erkennen, dass sie genauso sind wie ihre Altersgenossen – sie werden gelobt und erhalten konstruktive Rückmeldungen. Dadurch werden sie stärker, und ihr Mut zur Kommunikation sowie zur Erkundung neuer Erfahrungen wächst.\n' +
	    '\n' +
	    'In Zusammenarbeit mit meinem Kollegen Dipl. Psychologen Oleg Bäder haben wir zudem Übungen aus der Neuropsychologie, der sensorischen Integrationstherapie (SI), dem rhythmischen Bewegungstraining nach Dr. Blomberg sowie der psychomotorischen Ganzheitstherapie (PMG) nach Dr. Kannegießer-Leitner in unser Kampfsporttraining integriert. Dies führt nicht nur zu einem positiven psychologischen Effekt und einer Steigerung des Selbstwertgefühls, sondern ermöglicht auch eine gezielte therapeutische Arbeit.'
  },
]

const AboutPage = () => {
	return (
		<div className={styles.about}>
			<h1 className={styles.about__title}>Über uns</h1>
			<div className={styles.about__cards}>
				{specialists.map((specialist, id) => (
					<SpecialistCard
						key={id}
						src={specialist.src}
						title={specialist.title}
						info={specialist.info}
						description={specialist.description}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutPage;