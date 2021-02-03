import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

var currentDate = new Date();
const currentYear = currentDate.getFullYear();

const IndexPage = () => (
	<Layout>
		<Sidebar />
		<div className="container-fluid p-0">
			<section
				className="resume-section p-3 p-lg-5 d-flex align-items-center"
				id="inicio"
			>
				<div className="w-100">
					<h1 className="mb-0">
						<span className="text-primary">{config.firstName}</span>
					</h1>

					<h3>Equipos en Acero Inoxidable de Venezuela Compañía Anónima</h3>

					<div className="subheading mb-5">
						<a href={`mailto:${config.email}`}>{config.email}</a>
						<br />
						<span className="dark-text">{config.phone}</span>
						<br />
						{config.address}
					</div>

					<p className="lead">
						En Equivenca nos dedicamos en proporcionar y dar soporte en Ingeniería, Procura, Fabricación e Instalación de equipos y tuberías sanitarias, Equipos para Procesos, Estructuras Metálicas, entre otros.
					</p>
					<p className="lead">	
						Con la experiencia y los recursos de primera con los que contamos, sacamos al mercado productos de envergadura con calidad profesional.
					</p>
					{/* <div className="social-icons">
					{config.socialLinks.map(social => {
						const { icon, url } = social;
						return (
						<a key={url} href={url}>
							<i className={`fab ${icon}`}></i>
						</a>
						);
					})}
					</div> */}
				</div>
			</section>

			<hr className="m-0" />

			<section
				className="resume-section p-3 p-lg-5 d-flex align-items-center"
				id="nosotros"
			>
				<div className="w-100">
					<h2 className="mb-5">Nosotros</h2>
					<p>
					EQUIPOS EN ACERO INOXIDABLES DE VENEZUELA, EQUIVENCA, C.A., es una empresa dedicada a dar soluciones en cuanto a la fabricación, estudios, diseño, procura, suministro, construcción, instalación y/o montaje, inspección y ensayos no destructivos, servicio y mantenimiento en las áreas de: mecánica, obras civiles, eléctricas, en áreas petroleras, petroquímicas, alimenticia y química en el sector público, estatal y privado.
					</p>

					<h3 className="mt-3">Misión</h3>
					<p className="my-0">
					EQUIPOS EN ACERO INOXIDABLES DE VENEZUELA, EQUIVENCA, C.A. es una empresa dedicada a la producción y suministro de bienes y servicios a través de profesionales altamente calificados, mejoramiento continuo de los procesos, productos y servicios utilizando tecnología de avanzada y altos estándares de calidad; garantizando respuestas rápidas y la entrega a tiempo a un costo eficiente para la total satisfacción de nuestros clientes, lo cual es nuestro más importante valor corporativo.
					</p>

					<h3 className="mt-3">Visión</h3>
					<p className="my-0">
					La visión de EQUIPOS EN ACERO INOXIDABLES DE VENEZUELA, EQUIVENCA, C.A. es ser una empresa líder en su área de negocios y ser tomada como referencia para nuestros Clientes, Proveedores y Competencia; contando para este fin con un equipo humano altamente calificado y motivado, recursos avanzados los cuales aseguran el cumplimiento de las más estrictas normas de calidad y seguridad y garantizan la excelencia de nuestros productos y servicios, y la satisfacción de nuestros clientes. Además, incursionar exitosamente tanto en el mercado nacional como internacional
					</p>
				</div>
			</section>

			<hr className="m-0" />

			<section
				className="resume-section p-3 p-lg-5 d-flex align-items-center"
				id="taller"
			>
				<div className="w-100">
					<h2 className="mb-5">Espacios de Trabajo</h2>
					<p>
						Actualmente contamos con mas de 1000 m² de infraestructura para producción (y seguimos creciendo) para hacer cara a los proyectos mas exigentes. 
					</p>
					<p className="my-0">
						Galpón 1: Zona Industrial Carabobo, 8va transversal, Centro Ind. Mauni, Valencia, Carabobo.
					</p>
					<p className="my-0">
						Galpón 2: Sector Ojo de Agua, vía Vigirima, Galpón 2, Guacara.
					</p>

					<h3 className="mt-3">Normas de calidad que rigen nuestros procesos</h3>
					<p className="my-0">
						Entre las políticas de la empresa está, aplicar normas como: ASME Sección VIII, Divisiones 1 y 2. Sección I, Sección II, Sección V y Sección IX, ASME B 31.1, B 31.2, B 31.3 al B 31.9, B 16.5 a B 16.47, API 650, 620, 12D, 5L, otras API, DIN, TEMA. ASTM, AWS, AWWA, PDVSA, entre otras. Que permiten ofrecer calidad a nuestros clientes y seguridad a nuestros trabajadores.
					</p>
				</div>
			</section>

			<hr className="m-0" />

			<section
				className="resume-section p-3 p-lg-5 d-flex align-items-center"
				id="productos"
			>
				<div className="w-100">
					<h2 className="mb-5">Catálogo</h2>

					<span className="resaltado">
						<b>Leyenda:</b> <b>D:</b> diseño, <b>F:</b> fabricación, <b>I:</b> instalación, <b>S:</b> suministro
					</span>

					
					<div className="my-4">
						<div className="table-title">CONSTRUCCIÓN</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Cortagramas</td>
									<td>Desmalezamiento y limpieza de suelos</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Maquinaria para movimiento de tierras</td>
									<td>Movimiento de tierras y fundaciones</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Camión volteo</td>
									<td>Transporte</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Camión tipo trompo</td>
									<td>Concreto</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Madera</td>
									<td>Encofrado</td>
									<td>S</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">REACCIONES QUÍMICAS</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowSpan="2">Reactores con o sin sistema de agitación, con o sin aislamiento térmico y con o sin recubrimiento</td>
									<td>Chaquetas externas tipo dimpled, acanalada, media caña, inundada, con o sin serpentín interno</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Con acabado sanitario</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Mezcladores estáticos</td>
									<td>Con deflectores internos y/o bandejas</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Reactores de luz ultravioleta (UV)</td>
									<td>Para tratamiento de aguas</td>
									<td>S, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">TRANSPORTE DE FLUIDOS</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowSpan="2">Líneas de tuberías, incluyendo accesorios, bombas, compresores, controladores, etc.</td>
									<td>Tuberías con diámetros y espesores variables</td>
									<td>D, F, S, I</td>
								</tr>
								<tr>
									<td>Con acabado sanitario</td>
									<td>D, F, S, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">TRANSPORTE DE SÓLIDOS</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowSpan="2">Cintas transportadores, elevadores de canjilones y tornillos sin fin</td>
									<td>Para transporte horizontal, elevación e izamiento</td>
									<td>D, F, S</td>
								</tr>
								<tr>
									<td>Con acabado sanitario</td>
									<td>D, F, S</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">REDUCCIÓN O AUMENTO DE TAMAÑO</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Molinos</td>
									<td>Con elementos de trituración y desgaste</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Extrusores</td>
									<td>Con pellets de diferentes tamaños usados para consumo humano y animal</td>
									<td>D, F, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">SEPARACIÓN DE FASES</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Filtros</td>
									<td>Para separar sólidos</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Separadores</td>
									<td>Para separar líquidos, sólidos del gas y líquidos, sólidos de líquidos</td>
									<td>D, F, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">DESTILACIÓN</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Torres de destilación o fraccionamiento</td>
									<td>Con bandejas que dependen del número de etapas requerido y del proceso</td>
									<td>D, F, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">SOPORTE E IZAMIENTO</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Estructuras</td>
									<td>Para soporte</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Grúas y montacargas</td>
									<td>Para izamiento de carga</td>
									<td>S</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">TRATAMIENTO DE AGUAS</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Desaireadores</td>
									<td>Eliminación de gases disueltos en el agua para calderas</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Generadores de ozono</td>
									<td>Para tratamiento y purificación de agua</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Floculadores</td>
									<td>Para tratamiento de efluentes</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Sedimentadores</td>
									<td>Para tratamiento de efluentes</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Desionizadores</td>
									<td>Eliminación de iones del agua</td>
									<td>S, I</td>
								</tr>
								<tr>
									<td>Osmosis inversa</td>
									<td>Para filtrado del agua</td>
									<td>S, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">TRANSMISIÓN DE CALOR</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Intercambiadores de calor</td>
									<td>Con pasos variables, enfriados o calentados por cualquier fluido</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Enfriadores</td>
									<td>Por aire</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Torres de enfriamiento</td>
									<td>Agua enfriada por aire</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Calderas</td>
									<td>Producción de vapor para generación de potencia y/o para procesos</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Cavas de enfriamiento y congelación</td>
									<td>Congelación y refrigeración de alimentos y medicinas</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Hornos</td>
									<td>Para calentamiento de crudo</td>
									<td>S, I</td>
								</tr>
								<tr>
									<td>Aire acondicionado</td>
									<td>Adecuación de ambientes</td>
									<td>S, I</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">TRANSMISIÓN DE ELECTRICIDAD</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Transformadores</td>
									<td>Aumento o reducción de voltaje</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Conductores eléctricos</td>
									<td>Líneas de transmisión</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Turbinas</td>
									<td>Generación eléctrica</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Motores</td>
									<td>Movimiento</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Postes</td>
									<td>Soportes</td>
									<td>S</td>
								</tr>
								<tr>
									<td>Accesorios eléctricos</td>
									<td>Conectores</td>
									<td>S</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div className="my-4">
						<div className="table-title">ALMACENAMIENTO DE FLUIDOS Y MATERIALES</div>
						<table className="proceso">
							<thead>
								<tr>
									<th>Producto/Servicio</th>
									<th>Característica</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Tanques de almacenamiento</td>
									<td>Diseñados para trabajar a presión atmosférica y temperatura ambiente bajo normas api entre otras</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Recipientes a presión</td>
									<td>Diseñados para trabajar a presiones y temperaturas variables bajo código ASME u otros</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Silos</td>
									<td>Para almacenamiento de sólidos a temperatura ambiente</td>
									<td>D, F, I</td>
								</tr>
								<tr>
									<td>Cisternas transportables</td>
									<td>Para transportar sólidos y líquidos</td>
									<td>D, F, I</td>
								</tr>
							</tbody>
						</table>
					</div>

					<span className="resaltado">
						<b>Leyenda:</b> <b>D:</b> diseño, <b>F:</b> fabricación, <b>I:</b> instalación, <b>S:</b> suministro
					</span>
				</div>
			</section>

			<hr className="m-0" />

			<div className="w-100 text-center my-3">
				&copy; Equivenca 2015-{currentYear} · RIF J-40084286-7
			</div>
		</div>
	</Layout>
);

export default IndexPage;
