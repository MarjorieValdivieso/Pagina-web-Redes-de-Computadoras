import { useParams, Link } from 'react-router-dom';
import './TemaDetail.css'; 

export default function TemaDetail() {
  const { temaSlug } = useParams();

  const formatTitle = (slug) => {
    return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="tema-detail-container">
      <div className="container">
        <Link to="/temario" className="back-link">← Volver al temario</Link>
        
        <article className="tema-article">
          <header className="tema-article-header">
            <h1>{formatTitle(temaSlug)}</h1>
            <div className="divider"></div>
          </header>

          <div className="tema-content-body">
            <p>Bienvenido al módulo de <strong>{formatTitle(temaSlug)}</strong>. Aquí podrás profundizar en todos los conceptos técnicos.</p>

            {temaSlug === 'conceptos-basicos-de-redes' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Introducción a Redes de Computadoras</h2>
                  </div>
                  <p>Una <strong>red de computadoras</strong> es un conjunto de computadores autónomos interconectados a través de una subred de comunicaciones. Estas redes conectan distintos ámbitos: académicos, profesionales, industriales, de servicios, oficinas y hogares.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Modelos de Comunicación</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Cliente-Servidor</h3>
                      <p>Varios clientes se conectan a través de una red a un servidor central que provee los recursos o servicios.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Peer to Peer (P2P)</h3>
                      <p>Los equipos se conectan entre sí de forma directa, sin depender de un servidor central, compartiendo recursos entre pares.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Clasificación según Tecnología de Transmisión</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Redes de Difusión</h3>
                      <p>Un solo canal de comunicación compartido por todas las máquinas. La información puede enviarse a un solo destino (<strong>Unicast</strong>), a varios (<strong>Multicast</strong>) o a todos (<strong>Broadcast</strong>).</p>
                    </div>
                    <div className="mini-card">
                      <h3>Redes Punto a Punto</h3>
                      <p>Consisten en muchas conexiones entre pares individuales de máquinas. La información puede pasar por varias máquinas intermedias, por lo que los algoritmos de enrutamiento son fundamentales.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Clasificación según Cobertura</h2>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Tipo</th>
                          <th>Alcance</th>
                          <th>Nodos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">PAN</span></td><td>&lt; 10 m</td><td>Dispositivos personales</td></tr>
                        <tr><td><span className="tag">LAN</span></td><td>10 m – 1 km</td><td>10 – 1000</td></tr>
                        <tr><td><span className="tag">MAN</span></td><td>1 km – 10 km</td><td>100 – 1000</td></tr>
                        <tr><td><span className="tag">WAN</span></td><td>10 km – 10 000 km</td><td>1000 – 1 millón</td></tr>
                        <tr><td><span className="tag">Internet</span></td><td>Alcance mundial</td><td>~1200 millones</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Un ejemplo de MAN inalámbrica es el estándar <strong>IEEE 802.16 (WiMAX)</strong>.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Redes Inalámbricas (Wireless Networks)</h2>
                  </div>
                  <p>Cuatro áreas de aplicación principales:</p>
                  <ul className="lista-check">
                    <li>Ampliación de redes LAN</li>
                    <li>Interconexión de edificios</li>
                    <li>Acceso nómada</li>
                    <li>Redes <strong>ad hoc</strong> (dispositivos conectados entre sí sin infraestructura fija)</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Componentes de la Red</h2>
                  </div>
                  <ul className="lista-check">
                    <li><strong>Dispositivos finales:</strong> computadoras, impresoras de red, teléfonos VoIP, cámaras de seguridad, dispositivos móviles.</li>
                    <li><strong>Dispositivos intermediarios:</strong> switches, puntos de acceso inalámbrico, routers (internetwork) y firewalls (seguridad).</li>
                    <li><strong>Medios de red:</strong> cobre, fibra óptica y acceso inalámbrico.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Estructura de Internet</h2>
                  </div>
                  <p>Internet es una colección jerárquica de redes públicas y privadas, organizada en niveles de proveedores (ISP): Nivel 1 (columna vertebral), Nivel 2 (redes regionales) y Nivel 3 (locales, dan servicio directo).</p>
                  <p><strong>Intranet:</strong> red interna solo para la compañía. <strong>Extranet:</strong> extiende el acceso a proveedores, clientes y colaboradores.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Conmutación en las Redes</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Por Circuitos</h3>
                      <p>(Red telefónica): se dedica una ruta fija durante toda la comunicación.</p>
                    </div>
                    <div className="mini-card">
                      <h3>De Paquetes</h3>
                      <p>(Redes de datos): la información se divide en paquetes que se enrutan por la mejor ruta disponible y se reordenan en el destino.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>Redes Convergentes</h2>
                  </div>
                  <p>Consolidan el tráfico de voz, video y datos en una sola plataforma, eliminando la necesidad de mantener redes separadas para cada servicio.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">10</span>
                    <h2>Características de Diseño de las Redes</h2>
                  </div>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>Tolerancia a fallas</h3><p>Se apoya en enlaces redundantes para recuperarse rápido ante fallas.</p></div>
                    <div className="mini-card"><h3>Escalabilidad</h3><p>Permite crecer sin afectar el rendimiento de los usuarios actuales.</p></div>
                    <div className="mini-card"><h3>Seguridad</h3><p>Confidencialidad, autenticación e integridad.</p></div>
                    <div className="mini-card"><h3>Confiabilidad</h3><p>Códigos de detección/corrección de errores y enrutamiento.</p></div>
                    <div className="mini-card"><h3>Calidad de Servicio (QoS)</h3><p>Clasifica y prioriza el tráfico (ej. voz/video en tiempo real sobre navegación web).</p></div>
                  </div>
                </div>

              </div>
            )}

            {temaSlug === 'modelo-osi' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Estructuración del Software de Red</h2>
                  </div>
                  <p>En una red de computadores el software es altamente estructurado. La mayoría de redes se organizan en <strong>capas o niveles</strong>: el número de capas, nombre, contenido y función varía de una red a otra, pero el propósito de cada capa es ofrecer ciertos servicios a las capas superiores.</p>
                  <p><strong>Protocolo:</strong> reglas y convenciones utilizadas en la comunicación de la capa de una máquina con la correspondiente de otra.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Procesos Pares (peers)</h3>
                      <p>Entidades que forman las capas correspondientes en máquinas diferentes. La comunicación entre capas correspondientes es virtual: cada capa transfiere los datos a su capa inferior hasta alcanzar el medio físico.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Interfaz</h3>
                      <p>Define los servicios y operaciones primitivas que la capa inferior ofrece a la superior. Se encuentra entre cada par de capas adyacentes.</p>
                    </div>
                  </div>
                  <p className="nota-pie"><strong>Arquitectura de red:</strong> conjunto de capas y protocolos, con la información suficiente para escribir un programa o construir el hardware de cada capa. Los interfaces no forman parte de la arquitectura.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Características de Diseño de las Capas</h2>
                  </div>
                  <p>Cada capa añade información de control al mensaje que recibe de la capa superior y lo pasa a la inferior, hasta alcanzar la capa más baja (en contacto con el medio físico). En la máquina de destino, cada capa realiza el proceso inverso.</p>
                  <ul className="lista-check">
                    <li><strong>Direccionamiento:</strong> mecanismo de identificación de emisores y receptores.</li>
                    <li><strong>Reglas de transferencia:</strong> Simplex, Half Duplex, Full Duplex.</li>
                    <li><strong>Control de errores:</strong> compatibilidad entre códigos de emisor y receptor.</li>
                    <li><strong>Secuenciamiento de mensajes</strong> y <strong>control de flujo</strong>.</li>
                    <li><strong>Manejo de mensajes de distinto tamaño:</strong> mecanismos para desensamblar, transmitir y ensamblar.</li>
                    <li><strong>Multiplexación:</strong> usar la misma conexión para múltiples comunicaciones no relacionadas.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Servicios de las Capas</h2>
                  </div>
                  <p><strong>Entidades:</strong> elementos activos de cada capa (software o hardware); las entidades de capas correspondientes se llaman <strong>entidades pares</strong>. Las entidades de la capa N implementan un servicio para la capa N+1, distinguiéndose la capa proveedora (N) y la usuaria (N+1).</p>
                  <p><strong>SAPs (Puntos de Acceso al Servicio):</strong> lugares donde la capa N+1 puede acceder a los servicios de la capa N. Cada SAP está asociado a una dirección.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Servicio Orientado a Conexión</h3>
                      <p>Existe un proceso de establecimiento de la conexión, transferencia de información y liberación de la conexión. El direccionamiento solo existe al establecer la conexión.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Servicio No Orientado a Conexión</h3>
                      <p>Cada mensaje se enruta de forma independiente, con direccionamiento en cada uno. No hay establecimiento ni liberación de conexión, y los mensajes pueden llegar desordenados.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Modelo de Referencia OSI</h2>
                  </div>
                  <ul className="lista-check">
                    <li>Creado por la <strong>Organización Internacional de Estandarización (ISO)</strong>, para la Interconexión de Sistemas Abiertos (OSI) entre sistemas heterogéneos.</li>
                    <li>Estructurado en <strong>7 niveles o capas</strong>, cuya función tiende a definir protocolos normalizados internacionalmente.</li>
                    <li>No es una arquitectura de red: no especifica servicios ni protocolos, solo indica lo que cada capa debe hacer.</li>
                    <li>Son pocas las arquitecturas que implementan el modelo OSI en su totalidad.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Las 7 Capas del Modelo OSI</h2>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Capa</th>
                          <th>Función principal</th>
                          <th>Unidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">7. Aplicación</span></td><td>Interfaz final usuario-red: correo, FTP, hojas de cálculo, etc.</td><td>Datos</td></tr>
                        <tr><td><span className="tag">6. Presentación</span></td><td>Formato, sintaxis y cifrado de los datos (no su significado).</td><td>Datos</td></tr>
                        <tr><td><span className="tag">5. Sesión</span></td><td>Establece y controla el diálogo entre procesos de usuarios distantes.</td><td>Datos</td></tr>
                        <tr><td><span className="tag">4. Transporte</span></td><td>Capa Host-Host: asegura entrega correcta y control de flujo entre hosts.</td><td>Segmentos</td></tr>
                        <tr><td><span className="tag">3. Red</span></td><td>Enrutamiento, conmutación e interconexión de redes heterogéneas.</td><td>Paquetes</td></tr>
                        <tr><td><span className="tag">2. Enlace</span></td><td>Control de flujo y transmisión libre de errores entre nodos adyacentes.</td><td>Tramas</td></tr>
                        <tr><td><span className="tag">1. Física</span></td><td>Transmisión de bits mediante señales (características mecánicas y eléctricas).</td><td>Bits</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Las redes de difusión resuelven el control de acceso al canal compartido mediante la subcapa <strong>MAC (Media Access Control)</strong>, dentro de la capa Enlace.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Arquitectura TCP/IP</h2>
                  </div>
                  <p><strong>TCP/IP</strong> (Protocolo de Control de Transmisión/Protocolo Internet) fue creado por ARPA, asociada al Departamento de Defensa de EE.UU., en la red ARPANET. La red Internet utiliza TCP/IP, cuyo modelo define <strong>4 capas</strong> (a diferencia de las 7 de OSI: no incluye Presentación ni Sesión).</p>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>Host-Red</h3><p>No define exactamente sus funciones; permite a un host conectarse a la red enviando paquetes IP.</p></div>
                    <div className="mini-card"><h3>Internet</h3><p>Entrega paquetes a la red (servicio no orientado a conexión). Define el protocolo <strong>IP</strong>.</p></div>
                    <div className="mini-card"><h3>Transporte</h3><p>Define <strong>TCP</strong> (orientado a conexión, sin errores) y <strong>UDP</strong> (no orientado a conexión, rápido pero no confiable — voz/video).</p></div>
                    <div className="mini-card"><h3>Aplicación</h3><p>Programas que usan la red: Telnet, FTP, SMTP, DNS, HTTP, entre otros.</p></div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Comparación: Modelo OSI vs. TCP/IP</h2>
                  </div>
                  <ul className="lista-check">
                    <li>Ambos se basan en el concepto de una <strong>pila de protocolos</strong> independientes, con capas de funcionalidad similar (Red/Internet, Transporte, Aplicación).</li>
                    <li>OSI distingue claramente entre servicios, interfaz y protocolos; TCP/IP no lo hace.</li>
                    <li>OSI se concibió antes de que existieran los protocolos, por lo que es un modelo general; TCP/IP surgió a partir de protocolos ya existentes, por lo que describe específicamente esa arquitectura.</li>
                    <li>OSI soporta comunicación orientada y no orientada a conexión en la capa Red, pero solo orientada a conexión en Transporte. TCP/IP es no orientado a conexión en la capa Red, pero soporta ambos modos en Transporte.</li>
                  </ul>
                </div>

              </div>
            )}

            {temaSlug === 'protocolos-ip-icmp-tcp-y-udp' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Protocolo Internet (IP)</h2>
                  </div>
                  <p>Es un protocolo <strong>no confiable, no orientado a conexión</strong>, encargado de:</p>
                  <ul className="lista-check">
                    <li>Definir el formato del paquete IP, la unidad básica de transferencia de datos en la capa Internet.</li>
                    <li>Realizar el ruteo de los paquetes.</li>
                    <li>Definir el conjunto de reglas de distribución de paquetes en forma no confiable y sin conexión.</li>
                    <li>Dar una dirección IP a cada dispositivo que se conecte en una red de datos.</li>
                  </ul>
                  <p>Un paquete IP está formado por una <strong>cabecera</strong> y un <strong>campo de datos</strong>, donde se encapsulan paquetes TCP, UDP, ICMP, IGMP, etc.</p>
                  <p className="nota-pie"><strong>Tiempo de Vida (TTL):</strong> indica el número máximo de saltos que un paquete puede dar antes de ser descartado (valor máximo 255). Cada ruteador que recibe el paquete decrementa el TTL en una unidad.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>ICMP (Internet Control Message Protocol)</h2>
                  </div>
                  <p>Estandarizado en el <strong>RFC 792</strong>. Utilizado por ruteadores para enviar mensajes de error y de control hacia otros ruteadores o hosts, y por un host para determinar si un destino es accesible o no. Los mensajes ICMP actúan en la capa IP o en la capa de protocolos más altos (TCP o UDP).</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Ping</h3>
                      <p>Determina si un destino es accesible o no, midiendo el tiempo que se tarda en alcanzar un host.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Traceroute</h3>
                      <p>Determina la ruta que un datagrama sigue desde el origen hasta un destino.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>UDP (User Datagram Protocol)</h2>
                  </div>
                  <p>Estandarizado en el <strong>RFC 768</strong>. Es un protocolo <strong>no orientado a conexión, no confiable</strong>: envía datos de una aplicación a otra sin garantizar la correcta recepción. Los paquetes pueden perderse, duplicarse o llegar en desorden, por lo que la capa de aplicación debe encargarse de resolver estos problemas.</p>
                  <ul className="lista-check">
                    <li>Cada puerto UDP tiene asociado un número de puerto según la aplicación que lo utilice.</li>
                    <li>Cada programa de aplicación puede identificarse completamente por su número de puerto.</li>
                    <li>UDP puede multiplexar varias comunicaciones de transporte entre un host de origen y uno de destino, ejecutándose simultáneamente.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>TCP (Transmission Control Protocol)</h2>
                  </div>
                  <p>Estandarizado en el <strong>RFC 793</strong>. Es un protocolo de transporte <strong>orientado a conexión</strong>, encargado de garantizar una comunicación extremo a extremo confiable, libre de errores y en secuencia correcta. Oculta las imperfecciones de la red y no asume confiabilidad de los protocolos de bajo nivel como IP.</p>
                  <p>TCP proporciona a los procesos de capa aplicación:</p>
                  <ul className="lista-check">
                    <li>Transferencia continua del flujo de datos.</li>
                    <li>Confiabilidad y control de flujo.</li>
                    <li>Circuitos virtuales y multiplexaje.</li>
                    <li>Comunicación Full Duplex.</li>
                  </ul>
                  <p className="nota-pie">Un segmento TCP está formado por una cabecera y un área de datos. Cuando un host envía datos a otro en otra red, los coloca en un segmento TCP, que luego se encapsula en un paquete IP.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Establecimiento y Cierre de Conexión TCP</h2>
                  </div>
                  <p>TCP utiliza tres pasos de control (<strong>handshake</strong>) para establecer una conexión entre dos hosts:</p>
                  <ul className="lista-check">
                    <li>Petición de establecimiento de conexión.</li>
                    <li>Aceptación de la conexión.</li>
                    <li>Confirmación (Acknowledgment) de la recepción de la aceptación.</li>
                  </ul>
                  <p className="nota-pie">Para cerrar la conexión, cada lado envía su petición de cierre, el otro confirma con ACK, informa a su aplicación para que cierre, y finalmente envía su propia aceptación de cierre — quedando la conexión cerrada en ambos sentidos.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Reconocimiento (ACK) en TCP</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Ventana de un solo segmento</h3>
                      <p>El emisor envía un segmento y espera el ACK del receptor antes de enviar el siguiente.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Ventana de múltiples segmentos</h3>
                      <p>El emisor envía varios segmentos seguidos (ej. 3) y el receptor confirma con un solo ACK acumulativo, mejorando la eficiencia.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Puertos, IPs y Sockets</h2>
                  </div>
                  <ul className="lista-check">
                    <li>Un <strong>número de puerto</strong> se usa para conectar una aplicación a TCP.</li>
                    <li>Una <strong>dirección IP</strong> es la única identificación para un host.</li>
                    <li>Un <strong>socket</strong> es la combinación de un número de puerto (TCP o UDP) y una dirección IP: <code>Conexión = {'{'}(puerto, IP), (puerto, IP){'}'}</code></li>
                  </ul>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Rango de puertos</th>
                          <th>Grupo</th>
                          <th>Ejemplos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">0 – 1023</span></td><td>Puertos bien conocidos</td><td>FTP (21), Telnet (23), SMTP (25), HTTP (80), POP3 (110), HTTPS (443)</td></tr>
                        <tr><td><span className="tag">1024 – 49151</span></td><td>Puertos registrados</td><td>MSN Messenger (1863), HTTP alternativo (8080)</td></tr>
                        <tr><td><span className="tag">49152 – 65535</span></td><td>Privados / dinámicos</td><td>Asignados temporalmente por el cliente</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">La respuesta del servidor a un cliente TCP utiliza números de puerto aleatorios (del rango dinámico) como puerto de destino.</p>
                </div>

              </div>
            )}

            {temaSlug === 'direccionamiento-ipv4' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>¿Qué es una Dirección IP?</h2>
                  </div>
                  <p>Cada host y cada ruteador en Internet tienen asociada una dirección IP. Una dirección IP <strong>no identifica una máquina sino un interfaz de red</strong>: una máquina tiene tantas direcciones IP como interfaces de red tenga.</p>
                  <p>Está formada por <strong>32 bits</strong>, representada como cuatro números decimales separados por un punto, y se compone de dos partes:</p>
                  <p className="nota-pie"><code>Dirección IP = &lt;dirección de red (netid)&gt; + &lt;dirección de host (hostid)&gt;</code> — el netid identifica una red y el hostid identifica un host dentro de esa red.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Direccionamiento en TCP/IP</h2>
                  </div>
                  <p>Cada capa define un tipo de dirección distinto:</p>
                  <ul className="lista-check">
                    <li><strong>Capa Interfaz de Red:</strong> direcciones físicas o de hardware (MAC).</li>
                    <li><strong>Capa Internet:</strong> direcciones IP.</li>
                    <li><strong>Capa Transporte:</strong> sockets (puerto + dirección IP).</li>
                  </ul>
                  <p className="nota-pie">Identificador único de una conexión: <code>&lt;protocolo, puerto origen, IP origen, puerto destino, IP destino&gt;</code>. Puertos bien conocidos: 0–1023; no bien conocidos: 1024–65535.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Clases de Direcciones IP</h2>
                  </div>
                  <p>En redes con clase, los primeros bits del número de red indican la clase de dirección:</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Clase</th>
                          <th>Rango 1er octeto</th>
                          <th>Estructura</th>
                          <th>Máscara predet.</th>
                          <th>Redes y hosts</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">A</span></td><td>1 – 127</td><td>Red.Host.Host.Host</td><td>255.0.0.0</td><td>128 redes / 16,777,214 hosts</td></tr>
                        <tr><td><span className="tag">B</span></td><td>128 – 191</td><td>Red.Red.Host.Host</td><td>255.255.0.0</td><td>16,384 redes / 65,534 hosts</td></tr>
                        <tr><td><span className="tag">C</span></td><td>192 – 223</td><td>Red.Red.Red.Host</td><td>255.255.255.0</td><td>2,097,150 redes / 254 hosts</td></tr>
                        <tr><td><span className="tag">D</span></td><td>224 – 239</td><td colSpan="3">Multicast</td></tr>
                        <tr><td><span className="tag">E</span></td><td>240 – 255</td><td colSpan="3">Reservada / experimental</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Todos los ceros (0) y todos los unos (1) en un campo son direcciones de host no válidas.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Direcciones IP Especiales</h2>
                  </div>
                  <ul className="lista-check">
                    <li>El NetID <strong>127</strong> está reservado para <strong>loopback</strong> (127.0.0.0 – 127.255.255.255).</li>
                    <li>NetID y HostID no pueden ser 255 (todos los bits en 1) — es una dirección de <strong>broadcast</strong>.</li>
                    <li>HostID con todos los bits en "1" direcciona a todos los hosts de una red (<em>broadcast dirigido</em>).</li>
                    <li>Una IP de la red 0 se usa para identificar "este host"; HostID en todo "0" identifica a la red misma.</li>
                    <li>El HostID debe ser único dentro de la red.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Direcciones Reservadas para Intranet (RFC 1597)</h2>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Cantidad</th>
                          <th>Tipo</th>
                          <th>Rango de direcciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">1</span></td><td>Red Clase A</td><td>10.0.0.0 – 10.255.255.255</td></tr>
                        <tr><td><span className="tag">16</span></td><td>Redes Clase B</td><td>172.16.0.0 – 172.31.255.255</td></tr>
                        <tr><td><span className="tag">256</span></td><td>Redes Clase C</td><td>192.168.0.0 – 192.168.255.255</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Máscara de Red</h2>
                  </div>
                  <p>Diferencia el NetID del HostID y se usa para determinar si el host destino es local o remoto. Los <strong>bits en 1</strong> indican la posición de los bits de red; los <strong>bits en 0</strong> indican la posición de los bits de host. Las subredes se identifican por su dirección más la máscara, ej: <code>192.151.1.0 Mask: 255.255.255.0</code> o <code>192.151.1.0/24</code>.</p>
                  <p className="nota-pie">Para determinar el destino de un paquete se realiza el <strong>AND lógico</strong> entre la IP y la máscara de subred; si el resultado coincide con la red local, el destino es local, caso contrario es remoto.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Subredes (Subnetting)</h2>
                  </div>
                  <p>Una red puede dividirse en subredes, separando el número de host en <strong>número de subred</strong> y <strong>número de host</strong>:</p>
                  <p className="nota-pie"><code>Dirección IP = &lt;Ident. de red&gt;&lt;Ident. de subred&gt;&lt;Ident. de host&gt;</code></p>
                  <ul className="lista-check">
                    <li>El administrador de red decide cómo dividir la parte local en subred y host.</li>
                    <li>La división en subredes es transparente para las redes remotas: los routers externos siguen viendo una sola red.</li>
                    <li>Se implementa mediante una máscara de subred (ej. tomar bits prestados del campo host).</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Ejemplo de Cálculo de Subredes</h2>
                  </div>
                  <p>Dividiendo la red <strong>129.112.0.0</strong> (máscara 255.255.0.0) en subredes usando la nueva máscara <strong>255.255.224.0</strong>:</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Subred</th>
                          <th>Dirección IP</th>
                          <th>Broadcast</th>
                          <th>Hosts/subred</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">1</span></td><td>129.112.32.0</td><td>129.112.63.255</td><td>8190</td></tr>
                        <tr><td><span className="tag">2</span></td><td>129.112.64.0</td><td>129.112.95.255</td><td>8190</td></tr>
                        <tr><td><span className="tag">3</span></td><td>129.112.96.0</td><td>129.112.127.255</td><td>8190</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Ejemplo Clase C: con máscara 255.255.255.248 y dirección de host 201.222.5.121 → Subred = 201.222.5.120, hosts válidos 201.222.5.121–126, broadcast 201.222.5.127.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>VLSM (Variable Length Subnet Mask)</h2>
                  </div>
                  <p>Se emplea cuando subredes dentro de una misma red requieren <strong>máscaras de diferente longitud</strong>, ajustando cada subred al número real de hosts que necesita en vez de usar una máscara única para todas.</p>
                  <p className="nota-pie">Ejemplo: a partir de 192.168.1.0/24, se pueden crear subredes /26 (para redes que necesitan hasta 60 hosts), /27 (hasta 30 hosts) y /30 (enlaces seriales de solo 2 direcciones), aprovechando el espacio de direcciones de forma más eficiente que con una máscara fija.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">10</span>
                    <h2>CIDR (Classless Inter Domain Routing)</h2>
                  </div>
                  <p>Descrito en los RFC 1518–1520. No rutea según la clase de la red, sino solo según los <strong>bits de mayor orden</strong> de la dirección IP (prefijo IP). Los routers CIDR ignoran las clases de direcciones.</p>
                  <ul className="lista-check">
                    <li>Cada entrada CIDR contiene una IP de 32 bits y una máscara de 32 bits, que determinan el prefijo.</li>
                    <li>Ejemplo: 8 redes clase C contiguas con máscara 255.255.248.0 pueden representarse como una sola entrada en la tabla de enrutamiento.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">11</span>
                    <h2>Supernetting</h2>
                  </div>
                  <p>También llamado <strong>sumarización de direcciones IP</strong>: agrupa varias redes/subredes contiguas y les asigna una dirección única al bloque completo, en vez de una entrada por cada red individual — reduciendo el tamaño de las tablas de enrutamiento.</p>
                  <p className="nota-pie">Ejemplo: las subredes 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24 y 172.16.3.0/24 pueden sumarizarse en una única supernet <strong>172.16.0.0/22</strong>, ya que comparten los mismos 22 bits de mayor orden.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Subnetting</h3>
                      <p>Toma bits del campo host para crear más redes (subredes) más pequeñas.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Supernetting</h3>
                      <p>Toma bits del campo red para agrupar varias redes contiguas en una sola ruta más grande.</p>
                    </div>
                  </div>
                  <p className="nota-pie">CIDR/Supernetting es usado por routers IGP (dentro de un sistema autónomo) y EGP (entre sistemas autónomos), logrando ruteo más eficiente y menor consumo de CPU y memoria.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">12</span>
                    <h2>Direccionamiento Privado y NAT</h2>
                  </div>
                  <p><strong>NAT</strong> (Network Address Translation) es el proceso de intercambiar una dirección por otra en la cabecera de un paquete IP, permitiendo a hosts con direcciones privadas acceder a Internet a través de un número reducido de direcciones públicas.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>NAT Dinámico</h3>
                      <p>Una pila de direcciones IP públicas sirve a un número mayor de hosts privados, ya que no todos acceden a Internet simultáneamente.</p>
                    </div>
                    <div className="mini-card">
                      <h3>NAT Estático</h3>
                      <p>Mapea permanentemente una dirección pública a una dirección privada específica (ej. para exponer un servidor web interno).</p>
                    </div>
                  </div>
                  <p className="nota-pie"><strong>PAT (Port Address Translation)</strong> — o NAT "muchos a uno" — permite que cientos de direcciones privadas compartan una única dirección IP pública, diferenciando las sesiones mediante los números de puerto de origen del segmento TCP.</p>
                </div>

              </div>
            )}

            {temaSlug === 'enrutamiento-dinamico' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Función de los Protocolos de Enrutamiento Dinámico</h2>
                  </div>
                  <p>Los protocolos de enrutamiento dinámico se usan para facilitar el intercambio de información de enrutamiento entre los routers. Permiten a los routers compartir información en forma dinámica sobre redes remotas y agregarla automáticamente en sus propias tablas de enrutamiento.</p>
                  <p>Cuando se produce un cambio de topología, los routers intercambian información entre sí, lo que les permite descubrir automáticamente nuevas redes y encontrar rutas alternativas ante una falla de enlace.</p>
                  <p className="nota-pie">El costo de usar enrutamiento dinámico es dedicar parte de los recursos del router (CPU y ancho de banda del enlace) a la operación del protocolo. En redes pequeñas el enrutamiento estático puede ser más apropiado.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Componentes de un Protocolo de Enrutamiento</h2>
                  </div>
                  <div className="tarjetas-grid">
                    <div className="mini-card">
                      <h3>Estructuras de Datos</h3>
                      <p>Algunos protocolos usan tablas y/o bases de datos para sus operaciones. Esta información se guarda en la RAM.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Algoritmo</h3>
                      <p>Lista limitada de pasos que se usan para llevar a cabo una tarea: facilitar información de enrutamiento y determinar el mejor camino.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Mensajes del Protocolo</h3>
                      <p>Se usan varios tipos de mensajes para descubrir routers vecinos, intercambiar información de enrutamiento y conservar información precisa sobre la red.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Enrutamiento Estático vs. Dinámico</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Estático</h3>
                      <ul className="lista-check">
                        <li>Fácil de entender y configurar</li>
                        <li>Bajo procesamiento de CPU y no usa ancho de banda</li>
                        <li>Necesita reconfigurarse ante cambios de red</li>
                        <li>Susceptible a errores de configuración</li>
                        <li>No funciona bien en redes grandes</li>
                        <li>Más seguro</li>
                      </ul>
                    </div>
                    <div className="mini-card">
                      <h3>Dinámico</h3>
                      <ul className="lista-check">
                        <li>Requiere conocimiento para su configuración eficiente</li>
                        <li>Alto uso de CPU, memoria y ancho de banda</li>
                        <li>Se ajusta automáticamente a los cambios de red</li>
                        <li>Menos susceptible a errores de configuración</li>
                        <li>Funciona bien en redes grandes</li>
                        <li>Menos seguro</li>
                      </ul>
                    </div>
                  </div>
                  <p className="nota-pie">El enrutamiento estático es útil en redes pequeñas sin crecimiento previsto, en conexiones de red única, o para definir una ruta predeterminada.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Clasificación de Protocolos: IGP y EGP</h2>
                  </div>
                  <p>Un <strong>sistema autónomo (AS)</strong>, o dominio de enrutamiento, es un conjunto de routers bajo una administración común (por ejemplo, la red interna de una empresa o la red de un ISP). Como Internet se basa en el concepto de AS, se requieren dos tipos de protocolos:</p>
                  <ul className="lista-check">
                    <li><strong>Protocolos de Gateway Interior (IGP):</strong> enrutamiento dentro de un mismo sistema autónomo (intrautónomo).</li>
                    <li><strong>Protocolos de Gateway Exterior (EGP):</strong> enrutamiento entre distintos sistemas autónomos (interautónomo). <strong>BGP</strong> es el único EGP viable actualmente y es el que usa Internet.</li>
                  </ul>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Categoría</th>
                          <th>Tipo</th>
                          <th>Protocolos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">IGP</span></td><td>Vector Distancia</td><td>RIPv1, RIPv2, IGRP, EIGRP</td></tr>
                        <tr><td><span className="tag">IGP</span></td><td>Link-State</td><td>IS-IS, OSPF</td></tr>
                        <tr><td><span className="tag">EGP</span></td><td>Vector Ruta</td><td>BGP</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Convergencia</h2>
                  </div>
                  <p>La <strong>convergencia</strong> ocurre cuando todas las tablas de enrutamiento de los routers se encuentran en un estado de uniformidad (consistente), es decir, cuando todos tienen información completa y precisa sobre la red.</p>
                  <p>El <strong>tiempo de convergencia</strong> es el tiempo que tardan los routers en compartir información, calcular las mejores rutas y actualizar sus tablas. La red no es completamente operativa hasta que ha convergido, por lo que se buscan tiempos de convergencia cortos.</p>
                  <ul className="lista-check">
                    <li>La convergencia es <strong>cooperativa</strong> (los routers comparten información) e <strong>independiente</strong> (cada uno calcula el impacto en sus propias rutas).</li>
                    <li><strong>RIP e IGRP</strong> tienen convergencia lenta.</li>
                    <li><strong>EIGRP y OSPF</strong> tienen convergencia más rápida.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Métricas</h2>
                  </div>
                  <p>Una <strong>métrica</strong> es un valor utilizado por los protocolos de enrutamiento para asignar costos y alcanzar redes remotas; determina cuál es la mejor ruta cuando existen varias hacia el mismo destino. La métrica de un protocolo no es comparable con la de otro.</p>
                  <ul className="lista-check">
                    <li><strong>Conteo de saltos:</strong> cantidad de routers que debe atravesar un paquete (usado por RIP).</li>
                    <li><strong>Ancho de banda:</strong> selección de rutas según el mayor ancho de banda.</li>
                    <li><strong>Carga:</strong> utilización de tráfico de un enlace.</li>
                    <li><strong>Retardo:</strong> tiempo que tarda un paquete en atravesar una ruta.</li>
                    <li><strong>Confiabilidad:</strong> probabilidad de falla de un enlace.</li>
                    <li><strong>Costo:</strong> valor asignado por el IOS o el administrador para indicar preferencia de ruta.</li>
                  </ul>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Protocolo</th>
                          <th>Métrica utilizada</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">RIP</span></td><td>Conteo de saltos (máx. 15; 16 = red inalcanzable)</td></tr>
                        <tr><td><span className="tag">IGRP / EIGRP</span></td><td>Ancho de banda, retardo, confiabilidad y carga (por defecto: ancho de banda y retardo)</td></tr>
                        <tr><td><span className="tag">IS-IS / OSPF</span></td><td>Costo (OSPF de Cisco usa el ancho de banda)</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Balanceo de Carga y Distancia Administrativa</h2>
                  </div>
                  <p><strong>Balanceo de carga:</strong> cuando dos o más rutas hacia el mismo destino tienen valores de métrica idénticos, el router no elige una sola; envía los paquetes utilizando todas las rutas del mismo costo.</p>
                  <p><strong>Distancia administrativa (AD):</strong> define la preferencia de un origen de enrutamiento con un valor entero entre 0 y 255. Cuanto menor el valor, mayor la preferencia. AD = 0 (red conectada directamente) es la más preferida; AD = 255 hace que la ruta no se instale en la tabla.</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Origen de la ruta</th>
                          <th>Distancia Administrativa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Conectado</td><td>0</td></tr>
                        <tr><td>Estática</td><td>1</td></tr>
                        <tr><td>Ruta sumarizada EIGRP</td><td>5</td></tr>
                        <tr><td>BGP externo</td><td>20</td></tr>
                        <tr><td>EIGRP interno</td><td>90</td></tr>
                        <tr><td>IGRP</td><td>100</td></tr>
                        <tr><td>OSPF</td><td>110</td></tr>
                        <tr><td>IS-IS</td><td>115</td></tr>
                        <tr><td>RIP</td><td>120</td></tr>
                        <tr><td>EIGRP externo</td><td>170</td></tr>
                        <tr><td>BGP interno</td><td>200</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Vector Distancia vs. Estado de Enlace</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Vector Distancia (Bellman-Ford)</h3>
                      <p>Comparte tablas de enrutamiento solo con los vecinos, de forma periódica o ante cambios (<em>triggered updates</em>). No ofrece una visión completa de la topología, solo dirección y métrica al destino. Alto tiempo de convergencia, pero consume pocos recursos de CPU.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Estado de Enlace / Link-State (SPF)</h3>
                      <p>Comparte LSPs con todos los equipos de la red (vecinos o no), construyendo una base de datos topológica sobre la que se aplica el algoritmo SPF (Dijkstra). Ofrece una visión completa de la topología, bajo tiempo de convergencia, pero consume más CPU, memoria y ancho de banda inicial. Ejemplo: OSPF.</p>
                    </div>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Vector Distancia</th>
                          <th>Estado de Enlace</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Topología basada en datos del vecino</td><td>Topología a partir de datos originales</td></tr>
                        <tr><td>Incremento de métrica con cada salto</td><td>Cálculo del camino más corto</td></tr>
                        <tr><td>Actualizaciones periódicas y por cambios</td><td>Actualizaciones solo por cambios</td></tr>
                        <tr><td>Alto tiempo de convergencia</td><td>Bajo tiempo de convergencia</td></tr>
                        <tr><td>Menor ancho de banda</td><td>Mayor ancho de banda al inicio</td></tr>
                        <tr><td>Menor recurso de CPU</td><td>Mayor recurso de CPU</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Los protocolos link-state soportan direccionamiento sin clase (VLSM), envían la máscara de subred en las actualizaciones, permiten sumarización y segmentar la red en áreas jerárquicas.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>Características de RIP</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Limitaciones de RIPv1</h3>
                      <p>Protocolo vector distancia con clase: no soporta redes no contiguas, no soporta VLSM, no envía máscara de subred y envía sus actualizaciones por broadcast.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Mejoras de RIPv2</h3>
                      <p>Incluye direcciones del siguiente salto en las actualizaciones, usa direcciones multicast para enviarlas, y ofrece una opción de autenticación.</p>
                    </div>
                  </div>
                  <p className="nota-pie">Ambas versiones usan <em>triggered updates</em> ante cambios de topología para lograr convergencia más rápida, con un límite máximo de 15 saltos (16 = red inalcanzable).</p>
                </div>

              </div>
            )}

            {temaSlug === 'protocolo-arp-rarp' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>¿Qué es ARP?</h2>
                  </div>
                  <p><strong>ARP</strong> (<em>Address Resolution Protocol</em>) permite hacer una relación (<em>mapping</em>) entre una dirección IP conocida y la dirección MAC del equipo al que pertenece esa dirección. A nivel local (LAN), para que un equipo pueda enviar datos a otro, debe conocer su dirección física de 48 bits.</p>
                  <p>ARP y RARP se implementan directamente en la <strong>capa de Enlace</strong>, y están descritos en el <strong>RFC 826</strong>.</p>
                  <p className="nota-pie">TCP/IP usa direcciones IP definidas por el administrador al momento de la instalación, sin relación directa con la dirección MAC; por eso se necesita un mecanismo de resolución como ARP.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Proceso de Resolución ARP</h2>
                  </div>
                  <p>El protocolo ARP intenta primero encontrar la dirección en su <strong>caché ARP</strong>. Si encuentra la correspondencia, devuelve la dirección física de 48 bits al emisor, que transmite el paquete de inmediato. Si no la encuentra, se ejecuta el siguiente intercambio:</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>ARP Request</h3>
                      <p>Si la dirección no está en la caché, el emisor envía un <strong>broadcast</strong> a toda la red local. Este mensaje es recibido por todos los dispositivos de la red.</p>
                    </div>
                    <div className="mini-card">
                      <h3>ARP Reply</h3>
                      <p>Si una máquina reconoce su propia IP en la solicitud, responde en <strong>unicast</strong> con su dirección MAC al equipo que generó la solicitud, el cual guarda esa información en su caché ARP para uso futuro.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Caché ARP</h2>
                  </div>
                  <p>Todo nodo mantiene una memoria <strong>ARP cache</strong> de direcciones IP vs. direcciones MAC, que es consultada cada vez que se necesita transmitir a otra dirección IP. Si la entrada no existe, se ejecuta el protocolo ARP para obtenerla.</p>
                  <ul className="lista-check">
                    <li>Las respuestas se almacenan en memoria caché, reduciendo el número de mensajes en la red.</li>
                    <li>Las entradas más antiguas son removidas mediante un refresco periódico (<em>time-out</em>), generalmente de <strong>15 minutos</strong> sin uso.</li>
                    <li>Para reducir el broadcast, un nodo que responde a un pedido ARP copia a su propia caché la IP y MAC del solicitante.</li>
                    <li>Actualmente ARP relaciona la MAC con la IP únicamente en los medios que soportan broadcast.</li>
                    <li>Sobre la capa Internet, donde reside ARP, todos los protocolos superiores usan solo direcciones IP.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>ARP hacia el Default Gateway</h2>
                  </div>
                  <p>Cuando un host necesita enviar tráfico fuera de su red local, el proceso de resolución ARP se dirige hacia el <strong>gateway</strong> en lugar del destino final, ya que la trama debe entregarse primero al router:</p>
                  <ul className="lista-check">
                    <li>El host detecta que el destino está fuera de su red y busca en su caché la MAC de su <em>default gateway</em>.</li>
                    <li>Si no la conoce, envía un ARP request en broadcast preguntando por la IP del gateway.</li>
                    <li>El gateway responde en unicast con su propia dirección MAC.</li>
                    <li>El host almacena la entrada en su caché ARP y ahora puede enviar la trama al gateway.</li>
                    <li>El gateway reenvía el paquete según su tabla de enrutamiento hacia la red de destino.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Proxy ARP</h2>
                  </div>
                  <p>En <strong>Proxy ARP</strong>, un dispositivo intermedio (por ejemplo un router) responde en nombre de otro host que se encuentra en una red distinta, entregando su propia dirección MAC como si fuera la del destino real. Así, ambos extremos creen estar hablando directamente entre sí, cuando en realidad el tráfico pasa a través del dispositivo proxy.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>RARP - Reverse Address Resolution Protocol</h2>
                  </div>
                  <p><strong>RARP</strong> realiza el mapeo inverso: a partir de una dirección Ethernet (MAC) conocida, obtiene la dirección IP correspondiente. Está descrito en el <strong>RFC 903</strong>.</p>
                  <p>Algunos hosts, como estaciones de trabajo sin disco, no conocen su propia dirección IP al arrancar. Usan un mecanismo similar a ARP, pero invirtiendo los parámetros: la dirección hardware es el dato conocido y la IP es el dato requerido.</p>
                  <p className="nota-pie">RARP requiere que exista en la red un <strong>servidor RARP</strong> configurado previamente, que mantiene una base de datos de correspondencia entre direcciones hardware y direcciones IP.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Comparación: ARP vs. RARP</h2>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Aspecto</th>
                          <th>ARP</th>
                          <th>RARP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">Mapeo</span></td><td>IP → MAC</td><td>MAC → IP</td></tr>
                        <tr><td><span className="tag">RFC</span></td><td>826</td><td>903</td></tr>
                        <tr><td><span className="tag">Dato conocido</span></td><td>Dirección IP</td><td>Dirección MAC (hardware)</td></tr>
                        <tr><td><span className="tag">Dato requerido</span></td><td>Dirección MAC</td><td>Dirección IP</td></tr>
                        <tr><td><span className="tag">Requiere servidor</span></td><td>No</td><td>Sí, servidor RARP configurado</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">Ambos protocolos operan directamente sobre la <strong>capa de Enlace</strong> y dependen de la capacidad de broadcast del medio físico.</p>
                </div>

              </div>
            )}

            {temaSlug === 'capa-aplicacion' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Capa de Aplicación, Presentación y Sesión</h2>
                  </div>
                  <p>La <strong>capa 7 (Aplicación)</strong> del modelo OSI es la más cercana al usuario final; es la que interactúa directamente con las aplicaciones que generan y consumen datos. En el modelo TCP/IP, las funciones de Aplicación, Presentación y Sesión se agrupan en una sola capa de <strong>Aplicación</strong>.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Capa de Presentación</h3>
                      <p>Tiene tres funciones principales: <strong>codificación y conversión</strong> de los datos de la capa de aplicación, <strong>compresión</strong> de los datos, y <strong>encriptación</strong> para su transmisión segura y posterior descifrado en el destino.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Capa de Sesión</h3>
                      <p>Sus funciones crean y mantienen diálogos entre las aplicaciones de origen y destino. Administra el intercambio de información para iniciar diálogos, mantenerlos activos y reiniciar sesiones.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Protocolos de Capa de Aplicación de TCP/IP</h2>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Protocolo</th>
                          <th>Función</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">DNS</span></td><td>Resuelve nombres de Internet en direcciones IP.</td></tr>
                        <tr><td><span className="tag">Telnet</span></td><td>Emulación de terminal para acceso remoto a servidores y dispositivos de red.</td></tr>
                        <tr><td><span className="tag">BOOTP</span></td><td>Precursor de DHCP; obtiene información de dirección IP durante el arranque.</td></tr>
                        <tr><td><span className="tag">DHCP</span></td><td>Asigna dirección IP, máscara de subred, gateway y servidor DNS a un host.</td></tr>
                        <tr><td><span className="tag">HTTP</span></td><td>Transfiere los archivos que conforman las páginas Web.</td></tr>
                        <tr><td><span className="tag">FTP</span></td><td>Transferencia interactiva de archivos entre sistemas.</td></tr>
                        <tr><td><span className="tag">SMTP</span></td><td>Transferencia de mensajes y archivos adjuntos de correo electrónico.</td></tr>
                        <tr><td><span className="tag">POP</span></td><td>Utilizado por clientes de correo para recuperar mensajes de un servidor remoto.</td></tr>
                        <tr><td><span className="tag">IMAP</span></td><td>Otro protocolo para la recuperación de correo electrónico.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Interacción con las Aplicaciones de Usuario Final</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Modelo Cliente-Servidor</h3>
                      <p>Los recursos se almacenan en el <strong>servidor</strong>. El <strong>cliente</strong> es una combinación de hardware/software que las personas utilizan en forma directa. Los archivos pueden <em>descargarse</em> del servidor al cliente, o <em>cargarse</em> del cliente al servidor para su almacenamiento.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Aplicaciones P2P (Peer-to-Peer)</h3>
                      <p>Cada PC de la red que ejecuta la aplicación puede funcionar como <strong>cliente o servidor</strong> para las demás. Ejemplos comunes: eDonkey, eMule, Shareaza, BitTorrent, Bitcoin, LionShare. Algunas se basan en el protocolo <strong>Gnutella</strong>, que permite compartir archivos en discos duros entre usuarios.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>HTTP y el Lenguaje de Marcado de Hipertexto</h2>
                  </div>
                  <p>Ejemplo de URL: <strong>http://www.epn.edu.ec/index.html</strong>. El explorador interpreta tres partes: el <strong>protocolo o esquema</strong> (HTTP), el <strong>nombre del servidor</strong> (www.epn.edu.ec) y el <strong>archivo solicitado</strong> (index.html).</p>
                  <ul className="lista-check">
                    <li>El explorador consulta un servidor de nombres para convertir el dominio en una dirección numérica.</li>
                    <li>Envía una solicitud <strong>GET</strong> al servidor pidiendo el archivo.</li>
                    <li>El servidor envía el código HTML de la página.</li>
                    <li>El explorador descifra el código HTML y da formato a la página.</li>
                  </ul>
                  <p className="nota-pie">HTTP especifica un protocolo de solicitud/respuesta. Los tres tipos de mensajes comunes son <strong>GET</strong> (solicitud de datos por parte del cliente), y <strong>POST</strong>/<strong>PUT</strong> (usados para subir datos al servidor Web).</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>SMTP, POP e IMAP</h2>
                  </div>
                  <p>Generalmente utilizan una aplicación llamada <strong>agente de usuario de correo</strong> (cliente de correo electrónico), que permite el envío de mensajes y coloca los recibidos en el buzón del cliente.</p>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>SMTP</h3><p>Envía correos electrónicos desde un cliente o un servidor.</p></div>
                    <div className="mini-card"><h3>POP</h3><p>Recibe mensajes de correo desde un servidor de correo electrónico.</p></div>
                    <div className="mini-card"><h3>IMAP</h3><p>Protocolo de acceso a mensajes de Internet; otra alternativa para la recuperación de correo.</p></div>
                  </div>
                  <p className="nota-pie">El cliente de correo envía mensajes a un servidor mediante SMTP, y recibe correos desde ese servidor mediante POP3 o IMAP.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Servicio de Nombres de Dominios (DNS)</h2>
                  </div>
                  <p>El protocolo <strong>DNS</strong> resuelve un nombre legible para las personas en la dirección numérica del dispositivo de red. El proceso de resolución ocurre en cuatro pasos: el cliente solicita el nombre, el servidor DNS lo relaciona con su dirección IP, y esa dirección numérica se envía de regreso al cliente para realizar la solicitud real al servidor.</p>
                  <p><strong>Jerarquía DNS:</strong> una jerarquía de servidores DNS contiene los registros que relacionan nombres con direcciones. Ejemplos de dominios de nivel superior:</p>
                  <ul className="lista-check">
                    <li><strong>.com:</strong> empresa o industria</li>
                    <li><strong>.org:</strong> organización sin fines de lucro</li>
                    <li><strong>.au:</strong> Australia</li>
                    <li><strong>.co:</strong> Colombia</li>
                    <li><strong>.jp:</strong> Japón</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Protocolo de Configuración Dinámica de Host (DHCP)</h2>
                  </div>
                  <p>DHCP permite que un host obtenga una dirección IP de forma dinámica. El host contacta al servidor DHCP y solicita la dirección; el servidor elige una dirección de un rango configurado llamado <strong>pool</strong> y se la concede por un período establecido.</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Mensaje</th>
                          <th>Dirección</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">DHCPDISCOVER</span></td><td>Cliente → Servidor</td></tr>
                        <tr><td><span className="tag">DHCPOFFER</span></td><td>Servidor → Cliente</td></tr>
                        <tr><td><span className="tag">DHCPREQUEST</span></td><td>Cliente → Servidor</td></tr>
                        <tr><td><span className="tag">DHCPACK</span></td><td>Servidor → Cliente</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">DHCP se usa para hosts de uso general (dispositivos de usuario final); el direccionamiento estático se reserva para dispositivos de red como gateways, switches, servidores e impresoras.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Protocolo de Transferencia de Archivos (FTP)</h2>
                  </div>
                  <p>FTP permite la transferencia de datos entre un cliente y un servidor. Un <strong>cliente FTP</strong> es una aplicación que se ejecuta en una PC y se utiliza para insertar y extraer datos de un servidor que ejecuta FTP.</p>
                  <ul className="lista-check">
                    <li><strong>Conexión de control:</strong> el cliente abre la primera conexión al servidor para el tráfico de comandos y respuestas.</li>
                    <li><strong>Conexión de datos:</strong> el cliente abre una segunda conexión para la transferencia de archivos propiamente dicha.</li>
                  </ul>
                  <p className="nota-pie">Según los comandos enviados por la conexión de control, los datos pueden descargarse desde el servidor o cargarse desde el cliente.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>Envío de Datos a la Aplicación Correcta</h2>
                  </div>
                  <p>En el dispositivo final, el <strong>número de puerto de servicio</strong> dirige los datos a la conversación correcta: cada servicio (HTTP, transferencia de archivos, correo electrónico, etc.) escucha en un número de puerto específico, lo que permite que un mismo host atienda múltiples aplicaciones de red simultáneamente.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">10</span>
                    <h2>Resumen</h2>
                  </div>
                  <ul className="lista-check">
                    <li>Las <strong>aplicaciones</strong> son programas con los que el usuario interactúa e inician la transferencia de datos a su solicitud.</li>
                    <li>Los <strong>servicios</strong> son programas en segundo plano que conectan la capa de aplicación con las capas inferiores del modelo de red.</li>
                    <li>Los <strong>protocolos</strong> proporcionan una estructura de reglas que garantiza que los servicios envíen y reciban datos entre dispositivos diferentes.</li>
                    <li><strong>HTTP</strong> admite la entrega de páginas web; <strong>SMTP, POP e IMAP</strong> el envío y recepción de correo; <strong>FTP</strong> el intercambio de archivos; las <strong>P2P</strong> facilitan compartir medios; y <strong>DNS</strong> resuelve nombres legibles en direcciones numéricas.</li>
                    <li>Todos estos elementos funcionan conjuntamente en la capa de aplicación, permitiendo que los usuarios trabajen y naveguen a través de Internet.</li>
                  </ul>
                </div>

              </div>
            )}

            {temaSlug === 'topologias-y-medios-tx' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Medios de Transmisión</h2>
                  </div>
                  <p>La selección del medio de transmisión está determinada por factores como la <strong>topología, capacidad, confiabilidad y naturaleza de los datos</strong>. Pueden emplearse cables físicos (medios guiados) o medios inalámbricos.</p>
                  <ul className="lista-check">
                    <li>UTP (par trenzado no blindado)</li>
                    <li>STP (par trenzado blindado)</li>
                    <li>Cable coaxial de banda base</li>
                    <li>Cable coaxial de banda ancha</li>
                    <li>Fibra óptica</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>UTP vs. STP</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>UTP</h3>
                      <p><strong>Ventajas:</strong> gran base instalada, tecnología familiar, relativamente barato y compatible con la mayoría de tecnologías LAN.</p>
                      <p><strong>Desventajas:</strong> exige estricto cumplimiento de normas de instalación, más sensible a EMI, y limitado a coberturas pequeñas (típico 100 m) en redes de alta velocidad.</p>
                    </div>
                    <div className="mini-card">
                      <h3>STP</h3>
                      <p><strong>Ventajas:</strong> mejor rendimiento que UTP en ambientes con ruido y EMI, mayor capacidad de transmisión.</p>
                      <p><strong>Desventajas:</strong> más caro, no todas las LAN lo soportan, mayor tamaño y peso, y requiere correcta instalación a tierra.</p>
                    </div>
                  </div>
                  <p className="nota-pie">El cable UTP consta de un revestimiento exterior, pares trenzados que protegen la señal contra interferencias, y aislamiento plástico codificado por color que identifica cada par. El STP añade un blindaje trenzado o de hoja metálica sobre los pares.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Cableado UTP: Conectores y Tipos</h2>
                  </div>
                  <p>El conector estándar para UTP es el <strong>RJ-45</strong>. Existen dos estándares de conexión de pines: <strong>T568A</strong> y <strong>T568B</strong>, según el orden de colores de los pares.</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Tipo de cable</th>
                          <th>Estándar</th>
                          <th>Uso en capa de aplicación</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">Directo (Ethernet)</span></td><td>Ambos extremos T568A o T568B</td><td>Conecta un host a un dispositivo de red, como un switch o hub.</td></tr>
                        <tr><td><span className="tag">Cruzado (Ethernet)</span></td><td>Un extremo T568A, el otro T568B</td><td>Conecta dos hosts entre sí, o dos dispositivos intermediarios (switch-switch, router-router).</td></tr>
                        <tr><td><span className="tag">De consola</span></td><td>Propietario de Cisco</td><td>Conecta el puerto serie de una PC al puerto de consola de un router mediante un adaptador.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Cable Coaxial</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Ventajas</h3>
                      <p>Menos susceptible a interferencia y radiación que el UTP; alta capacidad de transmisión.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Desventajas</h3>
                      <p>Existen muchos tipos que no funcionan sobre la mayoría de redes LAN; más caro; instalación más dificultosa según tamaño y peso; requiere correcta instalación a tierra.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Fibra Óptica</h2>
                  </div>
                  <p>Puede ser <strong>monomodo</strong> o <strong>multimodo</strong>. Sus conectores más comunes son ST, SC, LC y LC multimodo dúplex.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Ventajas</h3>
                      <p>Menos pérdidas que el cobre (menor atenuación, mayor ancho de banda), lo que permite mayores distancias y velocidades. Excelente inmunidad a EMI, ya que las señales viajan como luz y no como energía eléctrica.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Desventajas</h3>
                      <p>Requiere más componentes electrónicos por la conversión electro-óptica, lo que la hace una solución más costosa que el cobre.</p>
                    </div>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Cuestión de implementación</th>
                          <th>Medios de cobre</th>
                          <th>Fibra óptica</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Ancho de banda admitido</td><td>10 Mbps a 10 Gbps</td><td>10 Mbps a 100 Gbps</td></tr>
                        <tr><td>Distancia</td><td>Relativamente corta (1 a 100 m)</td><td>Relativamente larga (1 a 100 000 m)</td></tr>
                        <tr><td>Inmunidad a EMI y RFI</td><td>Baja</td><td>Alta (totalmente inmune)</td></tr>
                        <tr><td>Inmunidad a peligros eléctricos</td><td>Baja</td><td>Alta (totalmente inmune)</td></tr>
                        <tr><td>Costos de medios y conectores</td><td>Valor más bajo</td><td>Valor más alto</td></tr>
                        <tr><td>Habilidades de instalación requeridas</td><td>Valor más bajo</td><td>Valor más alto</td></tr>
                        <tr><td>Precauciones de seguridad</td><td>Valor más bajo</td><td>Valor más alto</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Medios Inalámbricos</h2>
                  </div>
                  <p>Pueden ser enlaces <strong>infrarrojos</strong> o de <strong>radio</strong>.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Ventajas</h3>
                      <p>Útiles donde es difícil o imposible instalar cable; proporcionan acceso a redes LAN a usuarios que requieren movilidad.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Desventajas</h3>
                      <p>No suelen satisfacer demandas de rendimiento en redes grandes o de alta ocupación; la transmisión ocurre solo sobre distancias limitadas y a velocidades menores.</p>
                    </div>
                  </div>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Tecnología</th>
                          <th>Estándar IEEE</th>
                          <th>Detalle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">Wi-Fi</span></td><td>802.11</td><td>Usa CSMA/CA. Variantes: 802.11a (54 Mbps, 5 GHz), 802.11b (11 Mbps, 2,4 GHz), 802.11g (54 Mbps, 2,4 GHz), 802.11n (600 Mbps, 2,4/5 GHz), 802.11ac (1 Gbps, 5 GHz), 802.11ad (7 Gbps, 2,4/5/60 GHz).</td></tr>
                        <tr><td><span className="tag">Bluetooth</span></td><td>802.15</td><td>Hasta 3 Mbps; empareja dispositivos a distancias de 1 a 100 m.</td></tr>
                        <tr><td><span className="tag">WiMAX</span></td><td>802.16</td><td>Hasta 1 Gbps; topología punto a multipunto para banda ancha inalámbrica.</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Adaptadores y Tarjeta de Red (NIC)</h2>
                  </div>
                  <p>Todo host que desea formar parte de una red debe disponer de un <strong>interfaz</strong> que le permita transferir datos a otros dispositivos. El interfaz más común es la <strong>tarjeta de red (NIC)</strong>, que junto con su controlador implementa el protocolo de la capa de Enlace (como Ethernet o Token Ring) y parte del nivel Físico.</p>
                  <ul className="lista-check">
                    <li>La NIC proporciona la <strong>dirección MAC</strong>, que identifica al sistema dentro de la red.</li>
                    <li>Cada tarjeta tiene su propia MAC; esta identifica a la tarjeta, no necesariamente a toda la computadora.</li>
                    <li>El <strong>IEEE</strong> mantiene un registro de fabricantes y les asigna un identificador organizativo único (<strong>OUI</strong>).</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Direcciones MAC</h2>
                  </div>
                  <p>Cada tarjeta de red tiene un número identificativo único de <strong>48 bits</strong> en hexadecimal, administrado por el IEEE. Los primeros 3 octetos (24 bits) son el <strong>OUI</strong>, que identifica al proveedor; los siguientes 3 bytes identifican a cada tarjeta específica (2²⁴ combinaciones por bloque).</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Campo</th>
                          <th>Tamaño</th>
                          <th>Valores posibles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>I/G</td><td>1 bit</td><td>0 = Dirección individual · 1 = Dirección de grupo</td></tr>
                        <tr><td>U/L</td><td>1 bit</td><td>0 = Globalmente administrada (Universal) · 1 = Individualmente administrada</td></tr>
                        <tr><td>Dirección</td><td>46 bits</td><td>Identificador único de la interfaz</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <ul className="lista-check">
                    <li><strong>Individual:</strong> asociada a una estación particular de la red.</li>
                    <li><strong>De grupo:</strong> dirección multidestino, con dos clases: <em>Multicast</em> (grupo de estaciones) y <em>Broadcast</em> (todas las estaciones, dirección de "todos 1s").</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>Topologías de Redes WAN</h2>
                  </div>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>Punto a Punto</h3><p>Conexión limitada a dos nodos. Es la topología WAN más simple.</p></div>
                    <div className="mini-card"><h3>Hub-and-Spoke</h3><p>Un nodo central se conecta con varios nodos periféricos, similar a una estrella.</p></div>
                    <div className="mini-card"><h3>Malla Completa</h3><p>Cada nodo se conecta directamente con todos los demás nodos de la red.</p></div>
                  </div>
                  <p className="nota-pie">En la topología <strong>lógica</strong> punto a punto, la trama viaja del nodo de origen al nodo de destino a través de una conexión lógica establecida sobre la red, independientemente de la infraestructura física subyacente.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">10</span>
                    <h2>Half Duplex y Full Duplex</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Half Duplex</h3>
                      <p>La comunicación ocurre en ambas direcciones, pero solo una a la vez (por ejemplo, enviar o recibir, no ambas simultáneamente).</p>
                    </div>
                    <div className="mini-card">
                      <h3>Full Duplex</h3>
                      <p>Permite enviar y recibir datos de forma simultánea entre el servidor y el switch, aprovechando mejor el enlace.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">11</span>
                    <h2>Topologías Físicas de LAN</h2>
                  </div>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>Estrella</h3><p>Todos los dispositivos se conectan a un punto central (switch o hub).</p></div>
                    <div className="mini-card"><h3>Estrella Extendida</h3><p>Varias topologías en estrella interconectadas entre sí.</p></div>
                    <div className="mini-card"><h3>Bus</h3><p>Todos los dispositivos comparten un único cable troncal.</p></div>
                    <div className="mini-card"><h3>Anillo</h3><p>Cada dispositivo se conecta exactamente a otros dos, formando un círculo cerrado.</p></div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">12</span>
                    <h2>Topología Lógica para Medios Compartidos</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Acceso por Contienda</h3>
                      <p>Las estaciones pueden transmitir en cualquier momento; puede existir colisión, por lo que se requieren mecanismos para resolver la contienda por el medio. Tecnologías: <strong>CSMA/CD</strong> (Ethernet 802.3) y <strong>CSMA/CA</strong> (redes inalámbricas 802.11).</p>
                    </div>
                    <div className="mini-card">
                      <h3>Acceso Controlado</h3>
                      <p>Solo una estación transmite a la vez; los dispositivos esperan su turno, sin colisiones. Puede usarse un método de <em>paso de tokens</em>. Tecnologías: <strong>Token Ring</strong> (IEEE 802.5) e <strong>Interfaz de Datos Distribuida por Fibra (FDDI)</strong>.</p>
                    </div>
                  </div>
                  <p className="nota-pie">En la topología <strong>multiacceso</strong>, varias estaciones comparten el mismo medio físico y compiten (o se turnan) para transmitir sus tramas.</p>
                </div>

              </div>
            )}

            {temaSlug === 'cableado-estructurado' && (
              <div className="tema-secciones">

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">01</span>
                    <h2>Introducción y Evolución del Cableado Estructurado</h2>
                  </div>
                  <p>Un <strong>Sistema de Cableado Estructurado</strong> es una única red de cableado dentro de un edificio o grupo de edificios, que conecta dispositivos de voz, datos, vídeo y control, así como equipos de conmutación y administración, tanto dentro del edificio como hacia redes externas.</p>
                  <p>Su evolución pasó por cuatro etapas: <strong>1984</strong> sistemas de cableado telefónico, <strong>1991</strong> sistemas propietarios, y <strong>1995</strong> sistemas abiertos basados en la norma TIA/EIA 568 (con sus variantes 568A y 568B).</p>
                  <div className="tarjetas-grid">
                    <div className="mini-card"><h3>Objetivo</h3><p>Cubrir las necesidades de todos los usuarios y soportar cualquier servicio de transmisión actual o futura.</p></div>
                    <div className="mini-card"><h3>Vigencia</h3><p>Ser lo suficientemente flexible para incorporar nuevas tecnologías por un mínimo de 10 años sin recablear el edificio.</p></div>
                    <div className="mini-card"><h3>Permanencia</h3><p>Es el sistema con mayor permanencia dentro de la infraestructura de la empresa.</p></div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">02</span>
                    <h2>Características de un Sistema de Cableado Estructurado</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Flexibilidad y Estándares</h3>
                      <p>Diseño basado en topología modular adaptable a cambios y expansiones, apoyado en estándares internacionales como <strong>TIA/EIA-568</strong> e <strong>ISO/IEC 11801</strong> que garantizan interoperabilidad.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Organización y Escalabilidad</h3>
                      <p>Esquema de etiquetado que facilita el mantenimiento, y permite añadir nuevos dispositivos sin reconfigurar todo el sistema.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Rendimiento</h3>
                      <p>Soporta transmisión de datos de alta velocidad, telefonía IP y videoconferencia, entre otras aplicaciones.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Reducción de Costos</h3>
                      <p>Aunque implica mayor inversión inicial, reduce costos a largo plazo por eficiencia operativa y menor tiempo de inactividad.</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">03</span>
                    <h2>Organismos de Normalización y Normas Relevantes</h2>
                  </div>
                  <p>Las normas son emitidas por organismos como <strong>ANSI</strong> (American National Standards Institute), <strong>EIA</strong> (Electronics Industry Association), <strong>TIA</strong> (Telecommunications Industry Association) e <strong>ISO</strong> (International Standards Organization).</p>
                  <div className="tabla-wrapper">
                    <table className="tabla-redes">
                      <thead>
                        <tr>
                          <th>Norma</th>
                          <th>Alcance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td><span className="tag">TIA/EIA-568-C.1</span></td><td>Cableado de Telecomunicaciones en Edificios Comerciales.</td></tr>
                        <tr><td><span className="tag">TIA/EIA-569-D</span></td><td>Recorridos y Espacios de Telecomunicaciones.</td></tr>
                        <tr><td><span className="tag">TIA/EIA-570-C</span></td><td>Infraestructura Residencial de Telecomunicaciones.</td></tr>
                        <tr><td><span className="tag">TIA/EIA-606-B</span></td><td>Administración de Infraestructura de Telecomunicaciones.</td></tr>
                        <tr><td><span className="tag">TIA/EIA-607-B-1</span></td><td>Aterramiento (puesta a tierra) de Telecomunicaciones.</td></tr>
                        <tr><td><span className="tag">TIA-942-A</span></td><td>Infraestructura de Telecomunicaciones para Centros de Datos.</td></tr>
                        <tr><td><span className="tag">TIA-1179</span></td><td>Infraestructura de Telecomunicaciones para Hospitales.</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="nota-pie">La norma <strong>ANSI/TIA-568-C</strong> es la vigente en sitios de clientes y se divide en cuatro documentos (568-C.0 cableado genérico, 568-C.1 edificios, 568-C.2 par trenzado, 568-C.3 fibra óptica).</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">04</span>
                    <h2>Elementos Clave del Sistema (568-C.1)</h2>
                  </div>
                  <p>El sistema se organiza en subsistemas: <strong>Área de Trabajo</strong>, <strong>Cableado Horizontal</strong>, <strong>Cableado Vertical (Backbone)</strong>, <strong>Cuarto de Telecomunicaciones</strong>, <strong>Sala de Equipos</strong> e <strong>Infraestructura de Entrada/Acometida</strong>.</p>
                  <ul className="lista-check">
                    <li><strong>Área de Trabajo:</strong> espacio donde los usuarios interactúan con los equipos; se extiende desde la toma hasta el equipo y queda fuera del alcance de los estándares.</li>
                    <li><strong>Componentes del área de trabajo:</strong> cable de enlace de cobre (patch cord) y cable de enlace de fibra óptica.</li>
                  </ul>
                  <p className="nota-pie">No se permiten empalmes a lo largo del subsistema horizontal.</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">05</span>
                    <h2>Cableado Horizontal</h2>
                  </div>
                  <p>Se define desde el área de trabajo hasta el armario de telecomunicaciones, e incluye cables, conectores de salida y hardware de conexión. Debe diseñarse en <strong>topología estrella</strong>, sin puentes, derivaciones ni empalmes en todo el trayecto.</p>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Distancias</h3>
                      <p>El cable horizontal tiene un máximo de <strong>90 m</strong>. Se permiten hasta 10 m adicionales para cables de conmutación (5 m en el closet + 3 m recomendados en el área de trabajo).</p>
                    </div>
                    <div className="mini-card">
                      <h3>Cables Aceptados</h3>
                      <p>UTP de 4 pares/100 Ω, ScTP de 4 pares/100 Ω, fibra óptica multimodo 62.5/125 o 50/125 µm, y STP de 2 pares/150 Ω (reconocido pero no recomendado).</p>
                    </div>
                  </div>
                  <ul className="lista-check">
                    <li>Mínimo dos tomas por área de trabajo; una debe ser UTP de 100 Ω, categoría 5e o superior.</li>
                    <li>El cable termina en un jack de ocho posiciones, con asignación de pines <strong>T568A</strong> o <strong>T568B</strong>.</li>
                    <li>Radio de curvatura: no menor a 4 veces el diámetro del cable.</li>
                    <li>Tensión máxima de tendido: 110 N (25 lbf); no se recomienda el uso de grapas, sino abrazaderas o velcro.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">06</span>
                    <h2>Cableado de Fibra Óptica</h2>
                  </div>
                  <p>Incluye cableado horizontal, cableado vertical (backbone), hardware de conexión y patch cords. Existen distintos tipos de conectores: <strong>SC, ST, FDDI, Biconic, SMA</strong>.</p>
                  <ul className="lista-check">
                    <li>Horizontal: mínimo dos cables de fibra de 62.5/125 o 50/125 µm.</li>
                    <li>Backbone: multi-modo o mono-modo, típicamente en grupos de 6 o 12 fibras.</li>
                    <li>Radio de curvatura de 1.18 pulgadas y mínimo un metro de holgura en las tomas.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">07</span>
                    <h2>Cálculo del Cableado Horizontal</h2>
                  </div>
                  <p>El cálculo implica dimensionar conduits, determinar el tipo de cable y calcular su longitud considerando la ruta más lejana y más cercana, más un 10% de holgura y 2.5 m adicionales de terminación.</p>
                  <p className="nota-pie">Con la longitud ajustada se calcula el número de corridas por rollo (305 m / distancia promedio) y la cantidad de rollos necesarios (número de salidas / corridas por rollo).</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">08</span>
                    <h2>Cableado Vertical (Backbone)</h2>
                  </div>
                  <p>Interconecta armarios de telecomunicaciones, salas de equipos e infraestructura de entrada, incluyendo también el cableado entre edificios.</p>
                  <p><strong>Cables aprobados:</strong> UTP multipar de 100 Ω, ScTP de 100 Ω, fibra óptica multimodo (62.5/125 y 50/125 µm) y fibra mono-modo (9/125 µm).</p>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">09</span>
                    <h2>Cuarto de Telecomunicaciones y Sala de Equipos</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>Cuarto de Telecomunicaciones</h3>
                      <p>Área exclusiva para la distribución del cableado horizontal de un piso; ahí se terminan los cableados horizontal y vertical. Mínimo un armario por piso (uno adicional si se superan los 90 m). Dimensiones desde 3m x 2.1m según el área a servir.</p>
                    </div>
                    <div className="mini-card">
                      <h3>Sala de Equipos</h3>
                      <p>Espacio centralizado y compartido por todos los usuarios (central telefónica, servidores, CCTV). Debe tener temperatura entre 18-27°C, humedad 30-55%, sistema de tierra y de extinción de incendios; mínimo 14 m².</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">10</span>
                    <h2>Acometida de Entrada (TIA/EIA-569D)</h2>
                  </div>
                  <p>Espacio para la terminación de los cables provenientes de otros edificios o del proveedor de servicio. Contiene dispositivos de protección eléctrica y requiere conexión cruzada hacia el backbone de la sala de equipos.</p>
                  <ul className="lista-check">
                    <li>Métodos de ingreso: subterráneo (conduit), enterrado (sin protección) o aéreo (postes).</li>
                    <li>Los enrutamientos verticales entre edificios no deben ubicarse en pozos de elevadores.</li>
                  </ul>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">11</span>
                    <h2>Administración (TIA/EIA-606-B) y Puesta a Tierra (607-B-1)</h2>
                  </div>
                  <div className="tarjetas-duales">
                    <div className="mini-card">
                      <h3>TIA/EIA-606-B</h3>
                      <p>Norma de administración de la infraestructura: etiquetas, registros, reportes, planos y órdenes de trabajo. El cableado debe etiquetarse en cada extremo con identificadores únicos (ej. Cxxx para cable, TCxxx para armario).</p>
                    </div>
                    <div className="mini-card">
                      <h3>TIA/EIA-607-B-1</h3>
                      <p>Define el sistema de puesta a tierra: <strong>TBB</strong> (conductor principal entre barras de tierra), <strong>TGB</strong> (barra de tierra del armario/sala de equipos) y <strong>TMBG</strong> (barra principal de tierra del edificio).</p>
                    </div>
                  </div>
                </div>

                <div className="content-section">
                  <div className="section-header">
                    <span className="section-number">12</span>
                    <h2>Resumen</h2>
                  </div>
                  <ul className="lista-check">
                    <li>El <strong>cableado estructurado</strong> es una infraestructura única y flexible para voz, datos, vídeo y control, con vigencia mínima de 10 años.</li>
                    <li>Se rige por normas <strong>ANSI/TIA/EIA</strong>: 568-C (cableado genérico), 569-D (enrutamientos y espacios), 606-B (administración) y 607-B-1 (puesta a tierra).</li>
                    <li>Se organiza en subsistemas: área de trabajo, cableado horizontal (máx. 90 m), cableado vertical/backbone, cuarto de telecomunicaciones, sala de equipos y acometida de entrada.</li>
                    <li>El cableado horizontal admite UTP, ScTP y fibra óptica, con reglas estrictas de distancia, curvatura y tensión.</li>
                    <li>Un correcto etiquetado y puesta a tierra son esenciales para el mantenimiento y la seguridad del sistema.</li>
                  </ul>
                </div>

              </div>
            )}

          </div>
        </article>
      </div>
    </div>
  );
}
