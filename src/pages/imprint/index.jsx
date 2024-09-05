import styles from './Imprint.module.scss';
import HelpYou from '../../components/widgets/helpYou/index.jsx';
import Header from '../../components/widgets/header/index.jsx';
import Footer from '../../components/widgets/footer/index.jsx';

const ImprintPage = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.imprint}>
					<div className={styles.container}>
						<div className={styles.imprint__holder}>
							<div className={styles.imprint__content}>
								<h1 className={styles.imprint__title}>Impressum</h1>
								<div className={styles.imprint__subholder}>
									<p>
										Praxis für psychologische Beratung und Coaching
										<br />
										Sieversstr. 36&nbsp;
										<br />
										<span>51103 Köln</span>
									</p>
									<p>
										Tel: 0221-29847545
										<br />
										Mobil: 0176-45774045
									</p>
									<p>
										www.tabaksucht.de
										<br />
										info@tabaksucht.de
									</p>
									<p>
										Inhaber
										<br />
										Oleg Bäder
									</p>
									<p>
										Inhaltlich Verantwortliche
										<br />
										Praxis für psychologische Beratung und Coaching
									</p>
									<p>&nbsp;</p>
									<p>Haftungsbeschränkung</p>
									<p>
										Eine Gewähr für die Aktualität, Richtigkeit
										und Vollständigkeit der bereitgestellten Informationen und vorliegenden Inhalte dieser Website wird
										nicht übernommen. Haftungsansprüche, welche durch die Nutzung oder Nichtnutzung der dargebotenen
										Informationen oder durch fehlerhafte und unvollständige Informationen verursacht wurden, sind
										grundsätzlich ausgeschlossen. Autismus-Kampfclub behält sich ausdrücklich das Recht vor, Teile der Seite
										oder das gesamte Angebot ohne vorherige Ankündigung zu verändern, zu ergänzen, zu löschen oder die
										Veröffentlichung einzustellen. Hiermit distanzieren wir uns ausdrücklich von den Inhalten aller
										gelinkten Seiten auf dieser Webseite und machen uns diese Inhalte nicht zu eigen. Diese Erklärung
										gilt
										für alle auf unserer Webseite angebrachten Links.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.help}>
					<div className={styles.container}>
						<HelpYou />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ImprintPage;