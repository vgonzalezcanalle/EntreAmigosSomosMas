/* ══════════════════════════════════════════════
   ENTRE AMIGOS POR VENEZUELA — app.js v3 (Final)
   Módulos: A filtros · B geo · C estados · D auto-match
            E alimentación · F donaciones · G transporte
            H i18n · I locales · J voluntarios centros
══════════════════════════════════════════════ */
'use strict';

/* ─── MÓDULO H: i18n (Diccionarios de Idiomas) ─── */
const I18N = {
  es: {
    banner_gofundme:'💛 Donar en GoFundMe', banner_pagomovil:'📲 Pago Móvil', banner_psico:'🧠 Apoyo Psicológico', banner_ig:'📸 Instagram',
    logo_entre:'entre amigos por', ig_seguir:'Síguenos',
    nav_inicio:'ℹ️ Nosotros', nav_inspeccion:'🏗️ Inspección',
    nav_necesidades:'🔴 Necesidades', nav_venta: '🏷️ Venta', nav_acopio: '📦 Acopio', nav_inventario:'🏪 Locales y Donantes',
    nav_voluntarios:'🤝 Voluntarios', nav_alimentacion:'🍽️ Alimentación', nav_transporte:'🚗 Transporte',
    label_ciudad:'Ciudad / Estado', label_categoria:'Categoría', btn_ubicacion:'📍 Mi ubicación',
    cat_todas:'Todas', cat_sangre:'🩸 Sangre', cat_insumos:'🏥 Insumos Médicos',
    cat_rescate:'🦺 Rescate', cat_refugio:'⛺ Refugio y Ropa', cat_alimentos:'🥫 Alimentos y Agua',
    title_necesidades:'Necesidades activas', title_venta: 'Locales de Venta', title_acopio: 'Centros de Acopio e Inventario', title_inventario:'Locales y donantes',
    title_voluntarios:'Centros que buscan voluntarios', title_alimentacion:'Coordinación de alimentación',
    title_transporte:'Red de conductores',
    btn_publicar:'+ Publicar necesidad', btn_registrar_venta: '+ Registrar venta', btn_registrar_acopio: '+ Registrar acopio', btn_ofrecer:'+ Registrar local / donante',
    btn_nuevo_evento:'+ Nuevo evento', btn_pedir_voluntarios:'+ Pedir voluntarios',
    hint_transporte:'Los insumos "comprados" necesitan traslado. Ofrécete desde cada tarjeta.',
    empty_necesidades:'Aún no hay necesidades publicadas.\n¡Sé el primero en publicar una!',
    empty_venta: 'Aún no hay locales de venta registrados.\n¡Sé el primero en registrar uno!',
    empty_acopio: 'Aún no hay centros de acopio o inventarios registrados.',
    empty_inventario:'Aún no hay locales ni donantes registrados.\n¿Tienes algo disponible? ¡Regístralo!',
    empty_voluntarios:'Ningún centro ha pedido voluntarios aún.',
    empty_alimentacion:'Aún no hay eventos de alimentación.\nRegistra un punto de reparto para coordinarse.',
    empty_transporte:'Aún no hay traslados activos.\nCuando un insumo sea "comprado" aparecerá aquí.',
    modal_nueva_nec:'Publicar necesidad', modal_nueva_venta: 'Registrar Venta', modal_nuevo_acopio: 'Registrar Inventario / Acopio', modal_nuevo_inv:'Registrar local o donante',
    modal_nuevo_evento:'Registrar evento de alimentación', modal_voluntario_comida:'Anotarme para llevar comida',
    modal_pedir_vol:'Pedir voluntarios para mi centro', modal_ofrecerse_vol:'Ofrecerme como voluntario',
    modal_conductor:'🚗 Yo lo traslado', modal_pin:'Confirmar con PIN', modal_pago:'Pago Móvil',
    btn_publicar_nec:'Publicar', btn_cancelar:'Cancelar', btn_confirmar:'Confirmar',
    btn_usar_ubicacion:'📍 Usar mi ubicación actual', btn_listo:'Listo',
    ig_sub:'Síguenos para actualizaciones en tiempo real',
    stat_donaciones:'Donaciones publicadas', stat_necesidades:'Necesidades cubiertas', stat_inspecciones:'Inspecciones solicitadas', inicio_transparencia_title:'💛 Transparencia total', inicio_transparencia_sub:'Cada donación recibida se publica aquí con fotos, montos y destino. Nada queda sin rendir cuentas.', btn_publicar_donacion:'+ Publicar', inicio_cta_gofundme:'💚 Donar en GoFundMe', empty_donaciones:'Aún no hay donaciones publicadas.<br>¡Sé el primero en compartir cómo ayudaste! 💛',
    estado_necesitado:'🔴 Necesitado', estado_comprado:'🟡 Comprado',
    estado_en_transito:'🟠 En tránsito', estado_recibido:'🟢 Recibido', estado_necesita_transporte:'Esperando transporte',
    btn_marcar_comprado:'✅ Marcar comprado', btn_yo_traslado:'🚗 Yo lo traslado',
    btn_marcar_recibido:'🟢 Confirmar recibido', btn_maps:'📍 Ver en mapa', btn_whatsapp:'💬 WhatsApp',
    match_label:'💡 ¡Disponible cerca!',
    toast_guardado:'✅ Registrado correctamente', toast_error:'❌ Completa todos los campos requeridos',
    toast_pin_ok:'✅ Estado actualizado', toast_pin_error:'❌ PIN incorrecto',
    toast_geo_ok:'📍 Ubicación obtenida', toast_geo_error:'❌ No se pudo obtener la ubicación',
    toast_conductor:'🚗 ¡Traslado registrado!',
    welcome_sub:'Conectamos a quienes necesitan con quienes pueden ayudar',
    welcome_necesito:'Necesito ayuda', welcome_necesito_sub:'Publicar una necesidad o buscar recursos',
    welcome_ayudo:'Quiero ayudar', welcome_ayudo_sub:'Donar, ser voluntario o trasladar insumos',
    welcome_local:'Soy local', welcome_local_sub:'Ofrecer productos a la venta, ubicación y precios',
    welcome_insp:'Necesito inspección de vivienda', welcome_insp_sub:'Solicitar revisión estructural de tu edificio',
    welcome_o:'— o —', welcome_skip:'Ver todo el directorio →',
    inicio_lema:'Unidos por quienes más lo necesitan', inicio_quienes_title:'¿Quiénes somos?', inicio_p1:'Somos un grupo de jóvenes que, ante la emergencia causada por el terremoto en Venezuela, decidió actuar y unir esfuerzos para ayudar a las comunidades afectadas.', inicio_p2:'Esta iniciativa surge con el objetivo de unir esfuerzos y trabajar de manera colaborativa junto a amigos, familiares y todas aquellas personas que desean ayudar, pero que, al encontrarse fuera del país o lejos de las zonas afectadas, no saben cómo hacerlo.', inicio_p3:'Trabajamos en contacto directo con personas que se encuentran en primera línea atendiendo la emergencia y apoyando a las comunidades afectadas, lo que nos permite identificar las necesidades reales y hacer llegar la ayuda de forma rápida y directa.', inicio_p4:'A través de esta plataforma compartiremos cada compra, entrega y acción realizada, garantizando total transparencia en el uso de cada donación recibida.',
    modal_inspeccion_title:'🏗️ Inspección de edificación',
    insp_hint:'📋 Completa el formulario. Recibirás confirmación por WhatsApp.',
    insp_label_telefono:'Número de WhatsApp *', insp_small_telefono:'Te contactaremos aquí para coordinar la visita.',
    insp_label_edificio:'Nombre del edificio *', insp_label_ubicacion:'Ubicación exacta *',
    insp_label_fotos:'Fotos del edificio (vigas y columnas) *', insp_small_fotos:'Obligatorio. Hasta 6 fotos. Enfoca las vigas y columnas.',
    insp_label_antes1967:'¿Su edificio fue construido antes de 1967? *',
    insp_label_danos:'Si respondió "Sí" — ¿el edificio sufrió daños y reparaciones?',
    insp_label_planos:'¿Cuenta con planos estructurales? *',
    insp_btn_enviar:'Enviar solicitud',
    donor_title:'¿Cómo quieres ayudar?',
    donor_gofundme:'Donar dinero', donor_gofundme_sub:'GoFundMe · llega directo a quienes más lo necesitan',
    donor_pagomovil:'Pago Móvil', donor_pagomovil_sub:'Transferencia bancaria desde Venezuela',
    donor_insumos:'Ofrecer insumos', donor_insumos_sub:'Tengo medicinas, comida u otros recursos',
    donor_transporte:'Trasladar insumos', donor_transporte_sub:'Tengo vehículo y puedo hacer entregas',
    donor_comida:'Llevar comida', donor_comida_sub:'Anotarme en un turno de alimentación',
    donor_voluntario:'Ser voluntario', donor_voluntario_sub:'Apoyar en un centro que necesita manos',
    ph_ciudad:'Ej: Caracas', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital Pérez Carreño…', ph_descripcion_nec:'Describe qué se necesita y con qué urgencia…', ph_unidad:'unidades, cajas…', ph_nombre_local:'Farmacia Central, Juan Pérez…', ph_desc_inv:'Tenemos medicamentos, equipos, alimentos…', ph_productos:'Gasas estériles\nSuero fisiológico\nGuantes nitrilo', ph_direccion:'Av. Bella Vista, local 4…', ph_horario:'Lun–Vie 8am–6pm', ph_prod_precios:'Ej: Gasas a $2, Alcohol a $3…', ph_ubicacion:'Av. Principal, local 4', ph_articulos:'Ropa, medicinas, comida no perecedera…', ph_organizacion:'Ej: Fundación Cruz Roja', ph_cedula:'V-12345678', ph_nombre_centro:'Refugio Las Mercedes, Cruz Roja…', ph_tareas:'Repartir alimentos, clasificar donaciones…', ph_horario_vol:'Sábados 9am–1pm, urgente esta semana…', ph_contacto:'Nombre del responsable', ph_tu_nombre:'Tu nombre', ph_aportar:'Puedo llevar mi vehículo, tengo experiencia en primeros auxilios…', ph_nombre_lugar:'Parque Los Caobos…', ph_personas:'50', ph_que_llevas:'Arroz, caraotas, agua…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5.000 Bs. / 50 USD', ph_don_desc:'Se compraron 20 cajas de gasas para el Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'Categoría *', lbl_tipo_sangre:'Tipo de sangre *', lbl_descripcion:'Descripción *', lbl_cantidad:'Cantidad *', lbl_unidad:'Unidad', lbl_ciudad_estado:'Ciudad / Estado *', lbl_hospital:'Hospital o centro (opcional)', lbl_pin:'PIN de confirmación (4 dígitos) *', lbl_nombre_local:'Nombre del local o persona *', lbl_descripcion_ofreces:'Descripción de lo que ofreces *', lbl_productos:'Productos disponibles (uno por línea)', lbl_cantidad_disp:'Cantidad disponible', lbl_precio:'Precio en Bs. (vacío si es donación gratuita)', lbl_direccion:'Dirección exacta', lbl_horario:'Horario de atención', lbl_telefono_wa:'Teléfono / WhatsApp *', lbl_prod_precios:'Productos y Precios *', lbl_ubicacion_exacta:'Ubicación exacta *', lbl_telefono:'Teléfono *', lbl_soy:'Soy... *', lbl_articulos:'¿Qué artículos tienes disponibles? *', lbl_organizacion:'¿De dónde son? (Organización) *', lbl_donde_estan:'¿Dónde están? (Dirección exacta) *', lbl_cedula:'Cédula / Identidad *', lbl_ciudad:'Ciudad *', lbl_nombre_centro:'Nombre del centro u organización *', lbl_cuantos_vol:'¿Cuántos voluntarios necesitan? *', lbl_tareas:'¿Para qué tareas? *', lbl_horario_vol:'Horario en que se necesitan', lbl_contacto:'Persona de contacto', lbl_nombre_completo:'Nombre completo *', lbl_cedula_id:'Cédula / Pasaporte / ID *', lbl_que_aportas:'¿Qué puedes aportar? (opcional)', lbl_nombre_lugar:'Nombre del lugar *', lbl_tipo_lugar:'Tipo de lugar *', lbl_turno:'Turno *', lbl_fecha:'Fecha *', lbl_personas:'Personas estimadas', lbl_que_llevas:'¿Qué llevas? *', lbl_telefono_op:'Teléfono (opcional)', lbl_nombre_alias:'Nombre o alias *', lbl_cedula_pas:'Cédula / Pasaporte *', lbl_ciudad_origen:'Ciudad origen *', lbl_ciudad_destino:'Ciudad destino *', lbl_monto:'Monto recibido (Bs. o $) *', lbl_don_uso:'¿En qué se usó? *', lbl_don_donde:'¿Dónde se entregó? *', lbl_don_media:'Fotos o videos (opcional)', lbl_registrar:'Registrar', sel_categoria:'Selecciona una categoría', sel_tipo:'Selecciona tipo', sel_selecciona:'Selecciona', sel_turno:'Turno', opt_centro:'Centro de Acopio', opt_persona:'Persona Individual', opt_parque:'Parque', opt_refugio:'Refugio', opt_centro_acopio:'Centro de acopio', opt_otro:'Otro', opt_desayuno:'🌅 Desayuno', opt_almuerzo:'☀️ Almuerzo', opt_cena:'🌙 Cena', small_pin:'Lo usarás para confirmar cuando se compre o se reciba.', small_productos:'Aparecerán como etiquetas en tu tarjeta.', small_geo_mapa:'Así apareces en el mapa cuando alguien presione "Ver en mapa".', small_seguridad:'Requerido por seguridad. No se comparte públicamente.', small_trazabilidad:'Requerido para seguridad y trazabilidad.', small_don_media:'Puedes subir hasta 4 archivos (fotos o videos cortos).', btn_geolocal:'📍 Geolocalizar mi ubicación', btn_publicar_sol:'Publicar solicitud', btn_ofrecerme:'Ofrecerme', btn_crear_evento:'Crear evento', btn_anotarme:'Anotarme', btn_confirmar_traslado:'Confirmar traslado', pin_error_msg:'PIN incorrecto. Inténtalo de nuevo.', pago_banco:'Banco', pago_telefono:'Teléfono', pago_cedula:'Cédula', hint_venta:'Encuentra locales que ofrecen insumos a la venta con sus respectivos precios e información de contacto.', hint_acopio:'Insumos recolectados que ya cuentan con centros de acopio o personas individuales.', hint_voluntarios:'¿Eres un centro, refugio u organización? Publica cuántos voluntarios necesitas y para qué. La gente se anota directamente.',
    time_ahora:'Ahora mismo', time_min:'minuto', time_mins:'minutos', time_hora:'hora', time_horas:'horas', time_dia:'día', time_dias:'días',
    modal_confirmar_titulo:'Confirmar acción', lbl_tu_nombre:'Tu nombre *', lbl_tu_whatsapp:'Tu WhatsApp *', confirmar_error_msg:'Completa tu nombre y WhatsApp.',
  },
  en: {
    nav_venta: '🏷️ Sales', nav_acopio: '📦 Collections', title_venta: 'Sales Locations', title_acopio: 'Collection Centers',
    btn_registrar_venta: '+ Register sale', btn_registrar_acopio: '+ Register center', empty_venta: 'No sales locations registered yet.', empty_acopio: 'No collection centers registered yet.',
    modal_nueva_venta: 'Register Sale', modal_nuevo_acopio: 'Register Collection', welcome_local: 'I am a local store', welcome_local_sub: 'Offer products for sale, location and prices',
    banner_gofundme:'💛 Donate on GoFundMe', banner_pagomovil:'📲 Mobile Payment', banner_psico:'🧠 Psychological Support', banner_ig:'📸 Instagram',
    logo_entre:'between friends for', ig_seguir:'Follow us',
    nav_inicio:'ℹ️ About', nav_inspeccion:'🏗️ Inspection',
    nav_necesidades:'🔴 Needs', nav_inventario:'🏪 Stores & Donors',
    nav_voluntarios:'🤝 Volunteers', nav_alimentacion:'🍽️ Food Aid', nav_transporte:'🚗 Transport',
    label_ciudad:'City / State', label_categoria:'Category', btn_ubicacion:'📍 My location',
    cat_todas:'All', cat_sangre:'🩸 Blood', cat_insumos:'🏥 Medical Supplies',
    cat_rescate:'🦺 Rescue', cat_refugio:'⛺ Shelter & Clothing', cat_alimentos:'🥫 Food & Water',
    title_necesidades:'Active needs', title_inventario:'Stores and donors',
    title_voluntarios:'Centers seeking volunteers', title_alimentacion:'Food coordination', title_transporte:'Driver network',
    btn_publicar:'+ Post need', btn_ofrecer:'+ Register store / donor', btn_nuevo_evento:'+ New event', btn_pedir_voluntarios:'+ Request volunteers',
    hint_transporte:'"Purchased" supplies need transport. Volunteer from each card.',
    empty_necesidades:'No needs posted yet.', empty_inventario:'No stores or donors registered yet.',
    empty_voluntarios:'No centers have requested volunteers yet.', empty_alimentacion:'No food events yet.', empty_transporte:'No active transports yet.',
    modal_nueva_nec:'Post a need', modal_nuevo_inv:'Register store or donor', modal_nuevo_evento:'Register food event', modal_voluntario_comida:'Sign up to bring food',
    modal_pedir_vol:'Request volunteers for my center', modal_ofrecerse_vol:'Volunteer', modal_conductor:'🚗 I will deliver it', modal_pin:'Confirm with PIN', modal_pago:'Mobile Payment',
    btn_publicar_nec:'Publish', btn_cancelar:'Cancel', btn_confirmar:'Confirm', btn_usar_ubicacion:'📍 Use my current location', btn_listo:'Done',
    ig_sub:'Follow us for real-time updates',
    stat_donaciones:'Donations published', stat_necesidades:'Needs covered', stat_inspecciones:'Inspections requested', inicio_transparencia_title:'💛 Full transparency', inicio_transparencia_sub:'Every donation received is published here with photos, amounts and destination. Nothing goes unaccounted for.', btn_publicar_donacion:'+ Publish', inicio_cta_gofundme:'💚 Donate on GoFundMe', empty_donaciones:'No donations published yet.<br>Be the first to share how you helped! 💛', estado_necesitado:'🔴 Needed', estado_comprado:'🟡 Purchased', estado_en_transito:'🟠 In transit', estado_recibido:'🟢 Received',
    btn_marcar_comprado:'✅ Mark purchased', btn_yo_traslado:'🚗 I will deliver', btn_marcar_recibido:'🟢 Confirm received', btn_maps:'📍 View map', btn_whatsapp:'💬 WhatsApp',
    match_label:'💡 Available nearby!', toast_guardado:'✅ Published successfully', toast_error:'❌ Fill all required fields',
    toast_pin_ok:'✅ Status updated', toast_pin_error:'❌ Incorrect PIN', toast_geo_ok:'📍 Location obtained', toast_geo_error:'❌ Could not get location',
    toast_conductor:'🚗 Transport registered!', welcome_sub:'Connecting those who need with those who can help',
    welcome_necesito:'I need help', welcome_necesito_sub:'Post a need or find resources', welcome_ayudo:'I want to help', welcome_ayudo_sub:'Donate, volunteer or transport supplies',
    welcome_insp:'I need a building inspection', welcome_insp_sub:'Request a structural review of your building',
    welcome_o:'— or —', welcome_skip:'Browse the full directory →',
    inicio_lema:'United for those who need it most', inicio_quienes_title:'Who are we?', inicio_p1:'We are a group of young people who, faced with the earthquake emergency in Venezuela, decided to take action and join forces to help affected communities.', inicio_p2:'This initiative brings together friends, family, and anyone who wants to help but is abroad or far from the affected areas and does not know how.', inicio_p3:'We work in direct contact with those on the front lines, which allows us to identify real needs and deliver aid quickly and directly.', inicio_p4:'Through this platform we will share every purchase, delivery and action taken, ensuring complete transparency in the use of every donation received.', donor_title:'How do you want to help?',
    modal_inspeccion_title:'🏗️ Building inspection',
    insp_hint:'📋 Fill out the form. You will receive confirmation via WhatsApp.',
    insp_label_telefono:'WhatsApp number *', insp_small_telefono:'We will contact you here to coordinate the visit.',
    insp_label_edificio:'Building name *', insp_label_ubicacion:'Exact location *',
    insp_label_fotos:'Building photos (beams and columns) *', insp_small_fotos:'Required. Up to 6 photos. Focus on beams and columns.',
    insp_label_antes1967:'Was the building built before 1967? *',
    insp_label_danos:'If you answered "Yes" — did the building suffer damage or repairs?',
    insp_label_planos:'Do you have structural blueprints available? *',
    insp_btn_enviar:'Submit request',
    donor_gofundme:'Donate money', donor_gofundme_sub:'GoFundMe · goes directly to those in need', donor_pagomovil:'Mobile Payment', donor_pagomovil_sub:'Bank transfer from Venezuela',
    donor_insumos:'Offer supplies', donor_insumos_sub:'I have medicine, food or other resources', donor_transporte:'Transport supplies', donor_transporte_sub:'I have a vehicle and can make deliveries',
    donor_comida:'Bring food', donor_comida_sub:'Sign up for a food distribution shift', donor_voluntario:'Volunteer', donor_voluntario_sub:'Support a center that needs hands',
    ph_ciudad:'E.g. Caracas, Miranda…', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital name…', ph_descripcion_nec:'Describe what is needed and how urgently…', ph_unidad:'units, boxes…', ph_nombre_local:'Central Pharmacy, Juan Pérez…', ph_desc_inv:'We have medicine, equipment, food…', ph_productos:'Sterile gauze\nSaline solution\nNitrile gloves', ph_direccion:'Main Ave, store 4…', ph_horario:'Mon–Fri 8am–6pm', ph_prod_precios:'E.g. Gauze $2, Alcohol $3…', ph_ubicacion:'Main Ave, store 4', ph_articulos:'Clothing, medicine, non-perishable food…', ph_organizacion:'E.g. Red Cross Foundation', ph_cedula:'ID-12345678', ph_nombre_centro:'Las Mercedes Shelter, Red Cross…', ph_tareas:'Distribute food, sort donations…', ph_horario_vol:'Saturdays 9am–1pm, urgent this week…', ph_contacto:'Name of person in charge', ph_tu_nombre:'Your name', ph_aportar:'I can bring my vehicle, I have first aid experience…', ph_nombre_lugar:'Los Caobos Park…', ph_personas:'50', ph_que_llevas:'Rice, beans, water…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5,000 Bs. / 50 USD', ph_don_desc:'We bought 20 boxes of gauze for Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'Category *', lbl_tipo_sangre:'Blood type *', lbl_descripcion:'Description *', lbl_cantidad:'Quantity *', lbl_unidad:'Unit', lbl_ciudad_estado:'City / State *', lbl_hospital:'Hospital or center (optional)', lbl_pin:'Confirmation PIN (4 digits) *', lbl_nombre_local:'Store or person name *', lbl_descripcion_ofreces:'Description of what you offer *', lbl_productos:'Available products (one per line)', lbl_cantidad_disp:'Available quantity', lbl_precio:'Price in Bs. (leave blank if free donation)', lbl_direccion:'Exact address', lbl_horario:'Opening hours', lbl_telefono_wa:'Phone / WhatsApp *', lbl_prod_precios:'Products and Prices *', lbl_ubicacion_exacta:'Exact location *', lbl_telefono:'Phone *', lbl_soy:'I am... *', lbl_articulos:'What items do you have available? *', lbl_organizacion:'Where are you from? (Organization) *', lbl_donde_estan:'Where are you? (Exact address) *', lbl_cedula:'ID / Identity *', lbl_ciudad:'City *', lbl_nombre_centro:'Center or organization name *', lbl_cuantos_vol:'How many volunteers do you need? *', lbl_tareas:'For what tasks? *', lbl_horario_vol:'Schedule when needed', lbl_contacto:'Contact person', lbl_nombre_completo:'Full name *', lbl_cedula_id:'ID / Passport *', lbl_que_aportas:'What can you contribute? (optional)', lbl_nombre_lugar:'Place name *', lbl_tipo_lugar:'Place type *', lbl_turno:'Shift *', lbl_fecha:'Date *', lbl_personas:'Estimated people', lbl_que_llevas:'What are you bringing? *', lbl_telefono_op:'Phone (optional)', lbl_nombre_alias:'Name or alias *', lbl_cedula_pas:'ID / Passport *', lbl_ciudad_origen:'Origin city *', lbl_ciudad_destino:'Destination city *', lbl_monto:'Amount received (Bs. or $) *', lbl_don_uso:'What was it used for? *', lbl_don_donde:'Where was it delivered? *', lbl_don_media:'Photos or videos (optional)', lbl_registrar:'Register', sel_categoria:'Select a category', sel_tipo:'Select type', sel_selecciona:'Select', sel_turno:'Shift', opt_centro:'Collection Center', opt_persona:'Individual Person', opt_parque:'Park', opt_refugio:'Shelter', opt_centro_acopio:'Collection center', opt_otro:'Other', opt_desayuno:'🌅 Breakfast', opt_almuerzo:'☀️ Lunch', opt_cena:'🌙 Dinner', small_pin:'You will use this to confirm when purchased or received.', small_productos:'They will appear as tags on your card.', small_geo_mapa:'This is how you appear on the map when someone presses "View on map".', small_seguridad:'Required for security. Not shared publicly.', small_trazabilidad:'Required for security and traceability.', small_don_media:'You can upload up to 4 files (photos or short videos).', btn_geolocal:'📍 Geolocate my location', btn_publicar_sol:'Publish request', btn_ofrecerme:'Volunteer', btn_crear_evento:'Create event', btn_anotarme:'Sign up', btn_confirmar_traslado:'Confirm transport', pin_error_msg:'Incorrect PIN. Please try again.', pago_banco:'Bank', pago_telefono:'Phone', pago_cedula:'ID', hint_venta:'Find stores offering supplies for sale with prices and contact info.', hint_acopio:'Collected supplies that already have collection centers or individual holders.', hint_voluntarios:'Are you a center, shelter or organization? Post how many volunteers you need and for what. People sign up directly.',
    time_ahora:'Just now', time_min:'minute ago', time_mins:'minutes ago', time_hora:'hour ago', time_horas:'hours ago', time_dia:'day ago', time_dias:'days ago',
    modal_confirmar_titulo:'Confirm action', lbl_tu_nombre:'Your name *', lbl_tu_whatsapp:'Your WhatsApp *', confirmar_error_msg:'Please fill in your name and WhatsApp.',
  },
  pt: {
    nav_venta: '🏷️ Vendas', nav_acopio: '📦 Centros de Coleta', title_venta: 'Locais de Venda', title_acopio: 'Centros de Coleta',
    btn_registrar_venta: '+ Registrar venda', btn_registrar_acopio: '+ Registrar coleta', empty_venta: 'Nenhum local de venda registrado.', empty_acopio: 'Nenhum centro de coleta registrado.',
    modal_nueva_venta: 'Registrar Venda', modal_nuevo_acopio: 'Registrar Coleta', welcome_local: 'Sou lojista', welcome_local_sub: 'Oferecer produtos para venda, localização e preços',
    banner_gofundme:'💛 Doar no GoFundMe', banner_pagomovil:'📲 Pagamento Móvel', banner_psico:'🧠 Apoio Psicológico', banner_ig:'📸 Instagram',
    logo_entre:'entre amigos pela', ig_seguir:'Nos siga',
    nav_inicio:'ℹ️ Sobre nós', nav_inspeccion:'🏗️ Inspeção',
    nav_necesidades:'🔴 Necessidades', nav_inventario:'🏪 Locais e Doadores',
    nav_voluntarios:'🤝 Voluntários', nav_alimentacion:'🍽️ Alimentação', nav_transporte:'🚗 Transporte', label_ciudad:'Cidade / Estado', label_categoria:'Categoria', btn_ubicacion:'📍 Minha localização',
    cat_todas:'Todas', cat_sangre:'🩸 Sangue', cat_insumos:'🏥 Insumos Médicos', cat_rescate:'🦺 Resgate', cat_refugio:'⛺ Abrigo e Roupas', cat_alimentos:'🥫 Alimentos e Água',
    title_necesidades:'Necessidades ativas', title_inventario:'Locais e doadores', title_voluntarios:'Centros que buscam voluntários', title_alimentacion:'Coordenação de alimentação', title_transporte:'Rede de motoristas',
    btn_publicar:'+ Publicar necessidade', btn_ofrecer:'+ Registrar local / doador', btn_nuevo_evento:'+ Novo evento', btn_pedir_voluntarios:'+ Pedir voluntários',
    hint_transporte:'Insumos "comprados" precisam de transporte. Ofereça-se em cada cartão.', empty_necesidades:'Nenhuma necessidade publicada ainda.', empty_inventario:'Nenhum local ou doador registrado ainda.',
    empty_voluntarios:'Nenhum centro solicitou voluntários ainda.', empty_alimentacion:'Nenhum evento de alimentação ainda.', empty_transporte:'Nenhum transporte ativo ainda.',
    modal_nueva_nec:'Publicar necessidade', modal_nuevo_inv:'Registrar local ou doador', modal_nuevo_evento:'Registrar evento de alimentação', modal_voluntario_comida:'Me inscrever para levar comida',
    modal_pedir_vol:'Pedir voluntários para meu centro', modal_ofrecerse_vol:'Me oferecer como voluntário', modal_conductor:'🚗 Eu levo', modal_pin:'Confirmar com PIN', modal_pago:'Pagamento Móvel',
    btn_publicar_nec:'Publicar', btn_cancelar:'Cancelar', btn_confirmar:'Confirmar', btn_usar_ubicacion:'📍 Usar minha localização atual', btn_listo:'Pronto',
    ig_sub:'Nos siga para atualizações',
    stat_donaciones:'Doações publicadas', stat_necesidades:'Necessidades atendidas', stat_inspecciones:'Inspeções solicitadas', inicio_transparencia_title:'💛 Transparência total', inicio_transparencia_sub:'Cada doação recebida é publicada aqui com fotos, valores e destino. Nada fica sem prestação de contas.', btn_publicar_donacion:'+ Publicar', inicio_cta_gofundme:'💚 Doar no GoFundMe', empty_donaciones:'Nenhuma doação publicada ainda.<br>Seja o primeiro a compartilhar como ajudou! 💛', estado_necesitado:'🔴 Necessário', estado_comprado:'🟡 Comprado', estado_en_transito:'🟠 Em trânsito', estado_recibido:'🟢 Recebido',
    btn_marcar_comprado:'✅ Marcar comprado', btn_yo_traslado:'🚗 Eu levo', btn_marcar_recibido:'🟢 Confirmar recebido', btn_maps:'📍 Ver no mapa', btn_whatsapp:'💬 WhatsApp',
    match_label:'💡 Disponível perto!', toast_guardado:'✅ Publicado com sucesso', toast_error:'❌ Preencha todos os campos obrigatórios', toast_pin_ok:'✅ Status atualizado', toast_pin_error:'❌ PIN incorreto',
    toast_geo_ok:'📍 Localização obtida', toast_geo_error:'❌ Erro ao obter localização', toast_conductor:'🚗 Transporte registrado!', welcome_sub:'Conectamos quem precisa com quem pode ajudar',
    welcome_necesito:'Preciso de ajuda', welcome_necesito_sub:'Publicar uma necessidade ou buscar recursos', welcome_ayudo:'Quero ajudar', welcome_ayudo_sub:'Doar, ser voluntário ou transportar insumos',
    welcome_insp:'Preciso de inspeção de edificação', welcome_insp_sub:'Solicitar revisão estrutural do seu edifício',
    welcome_o:'— ou —', welcome_skip:'Ver todo o diretório →',
    inicio_lema:'Unidos por quem mais precisa', inicio_quienes_title:'Quem somos?', inicio_p1:'Somos um grupo de jovens que, diante da emergência causada pelo terremoto na Venezuela, decidiu agir e unir forças para ajudar as comunidades afetadas.', inicio_p2:'Esta iniciativa visa reunir amigos, familiares e qualquer pessoa que queira ajudar mas que, estando no exterior ou longe das áreas afetadas, não sabe como fazê-lo.', inicio_p3:'Trabalhamos em contato direto com quem está na linha de frente respondendo à emergência, o que nos permite identificar necessidades reais e entregar ajuda de forma rápida e direta.', inicio_p4:'Por meio desta plataforma, compartilharemos os detalhes de cada compra, entrega e ação realizada, garantindo total transparência no uso de cada doação recebida.', 
    modal_inspeccion_title:'🏗️ Inspeção de edificação', insp_hint:'📋 Preencha o formulário. Você receberá confirmação via WhatsApp.', insp_label_telefono:'Número do WhatsApp *', insp_small_telefono:'Entraremos em contato aqui para coordenar a visita.', insp_label_edificio:'Nome do edifício *', insp_label_ubicacion:'Localização exata *', insp_label_fotos:'Fotos do edifício (vigas e colunas) *', insp_small_fotos:'Obrigatório. Até 6 fotos. Foque nas vigas e colunas.', insp_label_antes1967:'O edifício foi construído antes de 1967? *', insp_label_danos:'Se respondeu "Sim" — o edifício sofreu danos ou reparações?', insp_label_planos:'Você tem plantas estruturais disponíveis? *', insp_btn_enviar:'Enviar solicitação',
    donor_title:'Como você quer ajudar?', donor_gofundme:'Doar dinheiro', donor_gofundme_sub:'GoFundMe · vai direto para quem mais precisa',
    donor_pagomovil:'Pagamento Móvel', donor_pagomovil_sub:'Transferência bancária', donor_insumos:'Oferecer insumos', donor_insumos_sub:'Tenho remédios, comida ou outros recursos',
    donor_transporte:'Transportar insumos', donor_transporte_sub:'Tenho veículo e posso fazer entregas', donor_comida:'Levar comida', donor_comida_sub:'Me inscrever em um turno de alimentação',
    donor_voluntario:'Ser voluntário', donor_voluntario_sub:'Apoiar um centro que precisa de ajuda',
    lbl_categoria:'Categoria *', lbl_tipo_sangre:'Tipo sanguíneo *', lbl_descripcion:'Descrição *', lbl_cantidad:'Quantidade *', lbl_ciudad_estado:'Cidade / Estado *', lbl_telefono_wa:'Telefone / WhatsApp *', sel_categoria:'Selecione uma categoria', sel_tipo:'Selecione o tipo', sel_selecciona:'Selecione', sel_turno:'Turno', opt_centro:'Centro de Coleta', opt_persona:'Pessoa Individual', opt_desayuno:'🌅 Café da manhã', opt_almuerzo:'☀️ Almoço', opt_cena:'🌙 Jantar', small_pin:'Você usará isso para confirmar quando comprado ou recebido.', small_seguridad:'Obrigatório por segurança. Não é compartilhado publicamente.', btn_publicar_sol:'Publicar solicitação', btn_ofrecerme:'Me oferecer', btn_crear_evento:'Criar evento', btn_anotarme:'Me inscrever', btn_confirmar_traslado:'Confirmar transporte', pin_error_msg:'PIN incorreto. Tente novamente.', pago_banco:'Banco', pago_telefono:'Telefone', pago_cedula:'CPF/ID', lbl_nombre_completo:'Nome completo *', lbl_ciudad:'Cidade *', hint_venta:'Encontre locais com insumos à venda com preços e contato.', hint_acopio:'Insumos coletados com centros de coleta ou detentores individuais.', hint_voluntarios:'É um centro ou organização? Publique quantos voluntários precisam.',
    time_ahora:'Agora mesmo', time_min:'minuto', time_mins:'minutos', time_hora:'hora', time_horas:'horas', time_dia:'dia', time_dias:'dias',
    modal_confirmar_titulo:'Confirmar ação', lbl_tu_nombre:'Seu nome *', lbl_tu_whatsapp:'Seu WhatsApp *', confirmar_error_msg:'Preencha seu nome e WhatsApp.',
  },
  fr: {
    nav_venta: '🏷️ Ventes', nav_acopio: '📦 Collectes', title_venta: 'Points de Vente', title_acopio: 'Centres de Collecte',
    btn_registrar_venta: '+ Enregistrer vente', btn_registrar_acopio: '+ Enregistrer centre', empty_venta: 'Aucun point de vente enregistré.', empty_acopio: 'Aucun centre de collecte enregistré.',
    modal_nueva_venta: 'Enregistrer Vente', modal_nuevo_acopio: 'Enregistrer Collecte', welcome_local: 'Je suis commerçant', welcome_local_sub: 'Proposer des produits à la vente, localisation et prix',
    banner_gofundme:'💛 Faire un don GoFundMe', banner_pagomovil:'📲 Paiement Mobile', banner_psico:'🧠 Soutien Psychologique', banner_ig:'📸 Instagram', logo_entre:'entre amis pour le', ig_seguir:'Suivez-nous',
    nav_inicio:'ℹ️ À propos', nav_inspeccion:'🏗️ Inspection',
    nav_necesidades:'🔴 Besoins', nav_inventario:'🏪 Locaux & Donateurs', nav_voluntarios:'🤝 Bénévoles', nav_alimentacion:'🍽️ Alimentation', nav_transporte:'🚗 Transport',
    label_ciudad:'Ville / État', label_categoria:'Catégorie', btn_ubicacion:'📍 Ma position', cat_todas:'Toutes', cat_sangre:'🩸 Sang', cat_insumos:'🏥 Fournitures médicales',
    cat_rescate:'🦺 Sauvetage', cat_refugio:'⛺ Abri & Vêtements', cat_alimentos:'🥫 Nourriture & Eau', title_necesidades:'Besoins actifs', title_inventario:'Locaux et donateurs',
    title_voluntarios:'Centres cherchant des bénévoles', title_alimentacion:'Coordination alimentaire', title_transporte:'Réseau de conducteurs', btn_publicar:'+ Publier un besoin', btn_ofrecer:'+ Enregistrer local / donateur',
    btn_nuevo_evento:'+ Nouvel événement', btn_pedir_voluntarios:'+ Demander des bénévoles', hint_transporte:'Les fournitures "achetées" ont besoin de transport.', empty_necesidades:'Aucun besoin publié pour le moment.',
    empty_inventario:'Aucun local ou donateur enregistré.', empty_voluntarios:'Aucun centre n\'a encore demandé de bénévoles.', empty_alimentacion:'Aucun événement alimentaire.', empty_transporte:'Aucun transport actif.',
    modal_nueva_nec:'Publier un besoin', modal_nuevo_inv:'Enregistrer local ou donateur', modal_nuevo_evento:'Enregistrer un événement', modal_voluntario_comida:'S\'inscrire pour apporter de la nourriture',
    modal_pedir_vol:'Demander des bénévoles', modal_ofrecerse_vol:'Devenir bénévole', modal_conductor:'🚗 Je le transporte', modal_pin:'Confirmer avec le code PIN', modal_pago:'Paiement Mobile',
    btn_publicar_nec:'Publier', btn_cancelar:'Annuler', btn_confirmar:'Confirmer', btn_usar_ubicacion:'📍 Utiliser ma position', btn_listo:'Prêt', ig_sub:'Suivez-nous pour des mises à jour en temps réel',
    stat_donaciones:'Dons publiés', stat_necesidades:'Besoins couverts', stat_inspecciones:'Inspections demandées', inicio_transparencia_title:'💛 Transparence totale', inicio_transparencia_sub:'Chaque don reçu est publié ici avec photos, montants et destination. Rien ne reste sans compte rendu.', btn_publicar_donacion:'+ Publier', inicio_cta_gofundme:'💚 Faire un don GoFundMe', empty_donaciones:'Aucun don publié pour le moment.<br>Soyez le premier à partager comment vous avez aidé ! 💛',
    estado_necesitado:'🔴 Nécessaire', estado_comprado:'🟡 Acheté', estado_en_transito:'🟠 En transit', estado_recibido:'🟢 Reçu', btn_marcar_comprado:'✅ Marquer comme acheté', btn_yo_traslado:'🚗 Je le transporte',
    btn_marcar_recibido:'🟢 Confirmer la réception', btn_maps:'📍 Voir sur la carte', btn_whatsapp:'💬 WhatsApp', match_label:'💡 Disponible à proximité!', toast_guardado:'✅ Publié avec succès', toast_error:'❌ Remplissez tous les champs',
    toast_pin_ok:'✅ Statut mis à jour', toast_pin_error:'❌ Code PIN incorrect', toast_geo_ok:'📍 Position obtenue', toast_geo_error:'❌ Impossible d\'obtenir la position', toast_conductor:'🚗 Transport enregistré!',
    welcome_sub:'Nous connectons ceux qui ont besoin et ceux qui peuvent aider', welcome_necesito:'J\'ai besoin d\'aide', welcome_necesito_sub:'Publier un besoin ou trouver des ressources', welcome_ayudo:'Je veux aider', welcome_ayudo_sub:'Faire un don, être bénévole ou transporter',
    welcome_insp:'J\'ai besoin d\'une inspection de bâtiment', welcome_insp_sub:'Demander une inspection structurelle de votre immeuble',
    welcome_o:'— ou —', welcome_skip:'Voir tout le répertoire →',
    inicio_lema:'Unis pour ceux qui en ont le plus besoin', inicio_quienes_title:'Qui sommes-nous ?', inicio_p1:'Nous sommes un groupe de jeunes qui a decide d\'agir et d\'unir ses forces pour aider les communautes touchees par le seisme au Venezuela.', inicio_p2:'Cette initiative vise a rassembler des amis, des familles et toute personne souhaitant aider mais qui ne sait pas comment le faire depuis l\'etranger.', inicio_p3:'Nous travaillons en contact direct avec ceux en premiere ligne, ce qui nous permet d\'identifier les besoins reels et d\'acheminer l\'aide rapidement.', inicio_p4:'A travers cette plateforme, nous partagerons chaque achat, livraison et action menee, garantissant une transparence totale dans l\'utilisation de chaque don.', 
    modal_inspeccion_title:'🏗️ Inspection de bâtiment', insp_hint:'📋 Remplissez le formulaire. Vous recevrez une confirmation par WhatsApp.', insp_label_telefono:'Numéro WhatsApp *', insp_small_telefono:'Nous vous contacterons ici pour coordonner la visite.', insp_label_edificio:'Nom du bâtiment *', insp_label_ubicacion:'Localisation exacte *', insp_label_fotos:'Photos du bâtiment (poutres et colonnes) *', insp_small_fotos:'Obligatoire. Jusqu\'à 6 photos. Focalisez sur les poutres et colonnes.', insp_label_antes1967:'Le bâtiment a-t-il été construit avant 1967 ? *', insp_label_danos:'Si vous avez répondu "Oui" — le bâtiment a-t-il subi des dommages ou réparations ?', insp_label_planos:'Avez-vous des plans structurels disponibles ? *', insp_btn_enviar:'Envoyer la demande',
    donor_title:'Comment voulez-vous aider?', donor_gofundme:'Donner de l\'argent', donor_gofundme_sub:'GoFundMe · va directement à ceux qui en ont besoin',
    donor_pagomovil:'Paiement Mobile', donor_pagomovil_sub:'Virement bancaire', donor_insumos:'Offrir des fournitures', donor_insumos_sub:'J\'ai des médicaments, de la nourriture...', donor_transporte:'Transporter des fournitures', donor_transporte_sub:'J\'ai un véhicule et je peux livrer',
    donor_comida:'Apporter de la nourriture', donor_comida_sub:'M\'inscrire pour une distribution', donor_voluntario:'Être bénévole', donor_voluntario_sub:'Soutenir un centre qui a besoin d\'aide',
    ph_ciudad:'E.g. Caracas, Miranda…', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital name…', ph_descripcion_nec:'Describe what is needed and how urgently…', ph_unidad:'units, boxes…', ph_nombre_local:'Central Pharmacy, Juan Pérez…', ph_desc_inv:'We have medicine, equipment, food…', ph_productos:'Sterile gauze\nSaline solution\nNitrile gloves', ph_direccion:'Main Ave, store 4…', ph_horario:'Mon–Fri 8am–6pm', ph_prod_precios:'E.g. Gauze $2, Alcohol $3…', ph_ubicacion:'Main Ave, store 4', ph_articulos:'Clothing, medicine, non-perishable food…', ph_organizacion:'E.g. Red Cross Foundation', ph_cedula:'ID-12345678', ph_nombre_centro:'Las Mercedes Shelter, Red Cross…', ph_tareas:'Distribute food, sort donations…', ph_horario_vol:'Saturdays 9am–1pm, urgent this week…', ph_contacto:'Name of person in charge', ph_tu_nombre:'Your name', ph_aportar:'I can bring my vehicle, I have first aid experience…', ph_nombre_lugar:'Los Caobos Park…', ph_personas:'50', ph_que_llevas:'Rice, beans, water…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5,000 Bs. / 50 USD', ph_don_desc:'We bought 20 boxes of gauze for Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'Catégorie *', lbl_tipo_sangre:'Groupe sanguin *', lbl_descripcion:'Description *', lbl_cantidad:'Quantité *', lbl_unidad:'Unit', lbl_ciudad_estado:'Ville / État *', lbl_hospital:'Hospital or center (optional)', lbl_pin:'Confirmation PIN (4 digits) *', lbl_nombre_local:'Store or person name *', lbl_descripcion_ofreces:'Description of what you offer *', lbl_productos:'Available products (one per line)', lbl_cantidad_disp:'Available quantity', lbl_precio:'Price in Bs. (leave blank if free donation)', lbl_direccion:'Exact address', lbl_horario:'Opening hours', lbl_telefono_wa:'Téléphone / WhatsApp *', lbl_prod_precios:'Products and Prices *', lbl_ubicacion_exacta:'Exact location *', lbl_telefono:'Phone *', lbl_soy:'I am... *', lbl_articulos:'What items do you have available? *', lbl_organizacion:'Where are you from? (Organization) *', lbl_donde_estan:'Where are you? (Exact address) *', lbl_cedula:'ID / Identity *', lbl_ciudad:'City *', lbl_nombre_centro:'Center or organization name *', lbl_cuantos_vol:'How many volunteers do you need? *', lbl_tareas:'For what tasks? *', lbl_horario_vol:'Schedule when needed', lbl_contacto:'Contact person', lbl_nombre_completo:'Full name *', lbl_cedula_id:'ID / Passport *', lbl_que_aportas:'What can you contribute? (optional)', lbl_nombre_lugar:'Place name *', lbl_tipo_lugar:'Place type *', lbl_turno:'Shift *', lbl_fecha:'Date *', lbl_personas:'Estimated people', lbl_que_llevas:'What are you bringing? *', lbl_telefono_op:'Phone (optional)', lbl_nombre_alias:'Name or alias *', lbl_cedula_pas:'ID / Passport *', lbl_ciudad_origen:'Origin city *', lbl_ciudad_destino:'Destination city *', lbl_monto:'Amount received (Bs. or $) *', lbl_don_uso:'What was it used for? *', lbl_don_donde:'Where was it delivered? *', lbl_don_media:'Photos or videos (optional)', lbl_registrar:'Register', sel_categoria:'Sélectionnez une catégorie', sel_tipo:'Sélectionnez le type', sel_selecciona:'Sélectionnez', sel_turno:'Shift', opt_centro:'Collection Center', opt_persona:'Individual Person', opt_parque:'Park', opt_refugio:'Shelter', opt_centro_acopio:'Collection center', opt_otro:'Other', opt_desayuno:'🌅 Petit-déjeuner', opt_almuerzo:'☀️ Déjeuner', opt_cena:'🌙 Dîner', small_pin:'You will use this to confirm when purchased or received.', small_productos:'They will appear as tags on your card.', small_geo_mapa:'This is how you appear on the map when someone presses "View on map".', small_seguridad:'Required for security. Not shared publicly.', small_trazabilidad:'Required for security and traceability.', small_don_media:'You can upload up to 4 files (photos or short videos).', btn_geolocal:'📍 Geolocate my location', btn_publicar_sol:'Publier la demande', btn_ofrecerme:'Me porter volontaire', btn_crear_evento:'Créer l\'événement', btn_anotarme:'M\'inscrire', btn_confirmar_traslado:'Confirmer le transport', pin_error_msg:'PIN incorrect. Veuillez réessayer.', pago_banco:'Banque', pago_telefono:'Téléphone', pago_cedula:'ID', hint_venta:'Find stores offering supplies for sale with prices and contact info.', hint_acopio:'Collected supplies that already have collection centers or individual holders.', hint_voluntarios:'Are you a center, shelter or organization? Post how many volunteers you need and for what. People sign up directly.',
    time_ahora:'A l\'instant', time_min:'minute', time_mins:'minutes', time_hora:'heure', time_horas:'heures', time_dia:'jour', time_dias:'jours',
    modal_confirmar_titulo:'Confirmer l\'action', lbl_tu_nombre:'Votre nom *', lbl_tu_whatsapp:'Votre WhatsApp *', confirmar_error_msg:'Veuillez indiquer votre nom et WhatsApp.',
  },
  de: {
    nav_venta: '🏷️ Verkauf', nav_acopio: '📦 Sammelstellen', title_venta: 'Verkaufsstellen', title_acopio: 'Sammelzentren',
    btn_registrar_venta: '+ Verkauf registrieren', btn_registrar_acopio: '+ Zentrum registrieren', empty_venta: 'Noch keine Verkaufsstellen registriert.', empty_acopio: 'Noch keine Sammelstellen registriert.',
    modal_nueva_venta: 'Verkauf registrieren', modal_nuevo_acopio: 'Sammelstelle registrieren', welcome_local: 'Ich bin Händler', welcome_local_sub: 'Produkte zum Verkauf, Standort und Preise anbieten',
    banner_gofundme:'💛 Spenden GoFundMe', banner_pagomovil:'📲 Mobile Zahlung', banner_psico:'🧠 Psychologische Unterstützung', banner_ig:'📸 Instagram', logo_entre:'unter freunden für', ig_seguir:'Folge uns',
    nav_inicio:'ℹ️ Über uns', nav_inspeccion:'🏗️ Inspektion',
    nav_necesidades:'🔴 Bedürfnisse', nav_inventario:'🏪 Geschäfte & Spender', nav_voluntarios:'🤝 Freiwillige', nav_alimentacion:'🍽️ Ernährung', nav_transporte:'🚗 Transport',
    label_ciudad:'Stadt / Bundesland', label_categoria:'Kategorie', btn_ubicacion:'📍 Mein Standort', cat_todas:'Alle', cat_sangre:'🩸 Blut', cat_insumos:'🏥 Medizinische Versorgung',
    cat_rescate:'🦺 Rettung', cat_refugio:'⛺ Unterkunft & Kleidung', cat_alimentos:'🥫 Essen & Wasser', title_necesidades:'Aktuelle Bedürfnisse', title_inventario:'Geschäfte und Spender',
    title_voluntarios:'Zentren, die Freiwillige suchen', title_alimentacion:'Lebensmittelkoordination', title_transporte:'Fahrernetzwerk', btn_publicar:'+ Bedürfnis posten', btn_ofrecer:'+ Geschäft / Spender registrieren',
    btn_nuevo_evento:'+ Neues Event', btn_pedir_voluntarios:'+ Freiwillige anfragen', hint_transporte:'"Gekaufte" Hilfsgüter benötigen Transport.', empty_necesidades:'Noch keine Bedürfnisse gepostet.',
    empty_inventario:'Noch keine Geschäfte oder Spender registriert.', empty_voluntarios:'Noch keine Freiwilligen angefragt.', empty_alimentacion:'Noch keine Food-Events.', empty_transporte:'Noch keine aktiven Transporte.',
    modal_nueva_nec:'Bedürfnis posten', modal_nuevo_inv:'Geschäft / Spender registrieren', modal_nuevo_evento:'Food-Event registrieren', modal_voluntario_comida:'Essen bringen anmelden',
    modal_pedir_vol:'Freiwillige anfragen', modal_ofrecerse_vol:'Als Freiwilliger melden', modal_conductor:'🚗 Ich transportiere es', modal_pin:'Mit PIN bestätigen', modal_pago:'Mobile Zahlung',
    btn_publicar_nec:'Veröffentlichen', btn_cancelar:'Abbrechen', btn_confirmar:'Bestätigen', btn_usar_ubicacion:'📍 Aktuellen Standort verwenden', btn_listo:'Fertig', ig_sub:'Folge uns für Echtzeit-Updates',
    stat_donaciones:'Spenden veröffentlicht', stat_necesidades:'Bedürfnisse gedeckt', stat_inspecciones:'Inspektionen angefragt', inicio_transparencia_title:'💛 Volle Transparenz', inicio_transparencia_sub:'Jede erhaltene Spende wird hier mit Fotos, Beträgen und Verwendungszweck veröffentlicht.', btn_publicar_donacion:'+ Veröffentlichen', inicio_cta_gofundme:'💚 Spenden GoFundMe', empty_donaciones:'Noch keine Spenden veröffentlicht.<br>Sei der Erste, der zeigt, wie du geholfen hast! 💛',
    estado_necesitado:'🔴 Benötigt', estado_comprado:'🟡 Gekauft', estado_en_transito:'🟠 Unterwegs', estado_recibido:'🟢 Erhalten', btn_marcar_comprado:'✅ Als gekauft markieren', btn_yo_traslado:'🚗 Ich transportiere es',
    btn_marcar_recibido:'🟢 Erhalt bestätigen', btn_maps:'📍 Auf Karte anzeigen', btn_whatsapp:'💬 WhatsApp', match_label:'💡 In der Nähe verfügbar!', toast_guardado:'✅ Erfolgreich veröffentlicht', toast_error:'❌ Bitte alle Felder ausfüllen',
    toast_pin_ok:'✅ Status aktualisiert', toast_pin_error:'❌ Falsche PIN', toast_geo_ok:'📍 Standort abgerufen', toast_geo_error:'❌ Standort konnte nicht abgerufen werden', toast_conductor:'🚗 Transport registriert!',
    welcome_sub:'Wir verbinden die Bedürftigen mit denen, die helfen können', welcome_necesito:'Ich brauche Hilfe', welcome_necesito_sub:'Ein Bedürfnis posten oder Ressourcen finden', welcome_ayudo:'Ich möchte helfen', welcome_ayudo_sub:'Spenden, freiwillig arbeiten oder Hilfsgüter transportieren',
    welcome_insp:'Ich benötige eine Gebäudeinspektion', welcome_insp_sub:'Strukturelle Überprüfung Ihres Gebäudes beantragen',
    welcome_o:'— oder —', welcome_skip:'Gesamtes Verzeichnis ansehen →',
    inicio_lema:'Vereint für die, die es am meisten brauchen', inicio_quienes_title:'Wer sind wir?', inicio_p1:'Wir sind eine Gruppe junger Menschen, die angesichts des Erdbebens in Venezuela beschlossen haben zu handeln und Kräfte zu bündeln, um den betroffenen Gemeinschaften zu helfen.', inicio_p2:'Diese Initiative soll Freunde, Familie und alle zusammenbringen, die helfen möchten, aber im Ausland oder weit von den betroffenen Gebieten entfernt sind und nicht wissen, wie sie helfen können.', inicio_p3:'Wir arbeiten in direktem Kontakt mit denen an der Front, was uns ermöglicht, den tatsächlichen Bedarf zu ermitteln und Hilfe schnell und direkt zu liefern.', inicio_p4:'Über diese Plattform werden wir jeden Kauf, jede Lieferung und jede Aktion teilen und so vollständige Transparenz beim Einsatz jeder erhaltenen Spende gewährleisten.', 
    modal_inspeccion_title:'🏗️ Gebäudeinspektion', insp_hint:'📋 Füllen Sie das Formular aus. Sie erhalten eine Bestätigung per WhatsApp.', insp_label_telefono:'WhatsApp-Nummer *', insp_small_telefono:'Wir kontaktieren Sie hier, um den Besuch zu koordinieren.', insp_label_edificio:'Gebäudename *', insp_label_ubicacion:'Genaue Adresse *', insp_label_fotos:'Fotos des Gebäudes (Träger und Säulen) *', insp_small_fotos:'Pflichtfeld. Bis zu 6 Fotos. Fokus auf Träger und Säulen.', insp_label_antes1967:'Wurde das Gebäude vor 1967 gebaut? *', insp_label_danos:'Falls ja — Hat das Gebäude Schäden oder Reparaturen erlitten?', insp_label_planos:'Haben Sie Baupläne verfügbar? *', insp_btn_enviar:'Anfrage senden',
    donor_title:'Wie möchtest du helfen?', donor_gofundme:'Geld spenden', donor_gofundme_sub:'GoFundMe · geht direkt an die Bedürftigen',
    donor_pagomovil:'Mobile Zahlung', donor_pagomovil_sub:'Banküberweisung', donor_insumos:'Hilfsgüter anbieten', donor_insumos_sub:'Ich habe Medikamente, Essen...', donor_transporte:'Hilfsgüter transportieren', donor_transporte_sub:'Ich habe ein Fahrzeug und kann liefern',
    donor_comida:'Essen bringen', donor_comida_sub:'Für Lebensmittelausgabe anmelden', donor_voluntario:'Freiwilliger werden', donor_voluntario_sub:'Ein Zentrum unterstützen, das Hilfe braucht',
    ph_ciudad:'E.g. Caracas, Miranda…', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital name…', ph_descripcion_nec:'Describe what is needed and how urgently…', ph_unidad:'units, boxes…', ph_nombre_local:'Central Pharmacy, Juan Pérez…', ph_desc_inv:'We have medicine, equipment, food…', ph_productos:'Sterile gauze\nSaline solution\nNitrile gloves', ph_direccion:'Main Ave, store 4…', ph_horario:'Mon–Fri 8am–6pm', ph_prod_precios:'E.g. Gauze $2, Alcohol $3…', ph_ubicacion:'Main Ave, store 4', ph_articulos:'Clothing, medicine, non-perishable food…', ph_organizacion:'E.g. Red Cross Foundation', ph_cedula:'ID-12345678', ph_nombre_centro:'Las Mercedes Shelter, Red Cross…', ph_tareas:'Distribute food, sort donations…', ph_horario_vol:'Saturdays 9am–1pm, urgent this week…', ph_contacto:'Name of person in charge', ph_tu_nombre:'Your name', ph_aportar:'I can bring my vehicle, I have first aid experience…', ph_nombre_lugar:'Los Caobos Park…', ph_personas:'50', ph_que_llevas:'Rice, beans, water…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5,000 Bs. / 50 USD', ph_don_desc:'We bought 20 boxes of gauze for Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'Kategorie *', lbl_tipo_sangre:'Blood type *', lbl_descripcion:'Beschreibung *', lbl_cantidad:'Menge *', lbl_unidad:'Unit', lbl_ciudad_estado:'Stadt / Bundesland *', lbl_hospital:'Hospital or center (optional)', lbl_pin:'Confirmation PIN (4 digits) *', lbl_nombre_local:'Store or person name *', lbl_descripcion_ofreces:'Description of what you offer *', lbl_productos:'Available products (one per line)', lbl_cantidad_disp:'Available quantity', lbl_precio:'Price in Bs. (leave blank if free donation)', lbl_direccion:'Exact address', lbl_horario:'Opening hours', lbl_telefono_wa:'Telefon / WhatsApp *', lbl_prod_precios:'Products and Prices *', lbl_ubicacion_exacta:'Exact location *', lbl_telefono:'Phone *', lbl_soy:'I am... *', lbl_articulos:'What items do you have available? *', lbl_organizacion:'Where are you from? (Organization) *', lbl_donde_estan:'Where are you? (Exact address) *', lbl_cedula:'ID / Identity *', lbl_ciudad:'City *', lbl_nombre_centro:'Center or organization name *', lbl_cuantos_vol:'How many volunteers do you need? *', lbl_tareas:'For what tasks? *', lbl_horario_vol:'Schedule when needed', lbl_contacto:'Contact person', lbl_nombre_completo:'Full name *', lbl_cedula_id:'ID / Passport *', lbl_que_aportas:'What can you contribute? (optional)', lbl_nombre_lugar:'Place name *', lbl_tipo_lugar:'Place type *', lbl_turno:'Shift *', lbl_fecha:'Date *', lbl_personas:'Estimated people', lbl_que_llevas:'What are you bringing? *', lbl_telefono_op:'Phone (optional)', lbl_nombre_alias:'Name or alias *', lbl_cedula_pas:'ID / Passport *', lbl_ciudad_origen:'Origin city *', lbl_ciudad_destino:'Destination city *', lbl_monto:'Amount received (Bs. or $) *', lbl_don_uso:'What was it used for? *', lbl_don_donde:'Where was it delivered? *', lbl_don_media:'Photos or videos (optional)', lbl_registrar:'Register', sel_categoria:'Kategorie wählen', sel_tipo:'Typ wählen', sel_selecciona:'Auswählen', sel_turno:'Shift', opt_centro:'Collection Center', opt_persona:'Individual Person', opt_parque:'Park', opt_refugio:'Shelter', opt_centro_acopio:'Collection center', opt_otro:'Other', opt_desayuno:'🌅 Frühstück', opt_almuerzo:'☀️ Mittagessen', opt_cena:'🌙 Abendessen', small_pin:'You will use this to confirm when purchased or received.', small_productos:'They will appear as tags on your card.', small_geo_mapa:'This is how you appear on the map when someone presses "View on map".', small_seguridad:'Required for security. Not shared publicly.', small_trazabilidad:'Required for security and traceability.', small_don_media:'You can upload up to 4 files (photos or short videos).', btn_geolocal:'📍 Geolocate my location', btn_publicar_sol:'Anfrage veröffentlichen', btn_ofrecerme:'Freiwillig melden', btn_crear_evento:'Veranstaltung erstellen', btn_anotarme:'Anmelden', btn_confirmar_traslado:'Transport bestätigen', pin_error_msg:'Falsche PIN. Bitte erneut versuchen.', pago_banco:'Bank', pago_telefono:'Telefon', pago_cedula:'Ausweis', hint_venta:'Find stores offering supplies for sale with prices and contact info.', hint_acopio:'Collected supplies that already have collection centers or individual holders.', hint_voluntarios:'Are you a center, shelter or organization? Post how many volunteers you need and for what. People sign up directly.',
    time_ahora:'Gerade jetzt', time_min:'Minute', time_mins:'Minuten', time_hora:'Stunde', time_horas:'Stunden', time_dia:'Tag', time_dias:'Tage',
    modal_confirmar_titulo:'Aktion bestätigen', lbl_tu_nombre:'Dein Name *', lbl_tu_whatsapp:'Dein WhatsApp *', confirmar_error_msg:'Bitte gib deinen Namen und WhatsApp an.',
  },
  it: {
    nav_venta: '🏷️ Vendita', nav_acopio: '📦 Raccolta', title_venta: 'Punti Vendita', title_acopio: 'Centri di Raccolta',
    btn_registrar_venta: '+ Registra vendita', btn_registrar_acopio: '+ Registra centro', empty_venta: 'Nessun punto vendita registrato.', empty_acopio: 'Nessun centro di raccolta registrato.',
    modal_nueva_venta: 'Registra Vendita', modal_nuevo_acopio: 'Registra Raccolta', welcome_local: 'Sono un commerciante', welcome_local_sub: 'Offrire prodotti in vendita, posizione e prezzi',
    banner_gofundme:'💛 Dona su GoFundMe', banner_pagomovil:'📲 Pagamento Mobile', banner_psico:'🧠 Supporto Psicologico', banner_ig:'📸 Instagram', logo_entre:'tra amici per il', ig_seguir:'Seguici',
    nav_inicio:'ℹ️ Chi siamo', nav_inspeccion:'🏗️ Ispezione',
    nav_necesidades:'🔴 Necessità', nav_inventario:'🏪 Negozi e Donatori', nav_voluntarios:'🤝 Voluntari', nav_alimentacion:'🍽️ Alimentazione', nav_transporte:'🚗 Trasporto',
    label_ciudad:'Città / Stato', label_categoria:'Categoria', btn_ubicacion:'📍 La mia posizione', cat_todas:'Tutte', cat_sangre:'🩸 Sangue', cat_insumos:'🏥 Forniture Mediche',
    cat_rescate:'🦺 Salvataggio', cat_refugio:'⛺ Rifugio e Vestiti', cat_alimentos:'🥫 Cibo e Acqua', title_necesidades:'Necessità attive', title_inventario:'Negozi e donatori',
    title_voluntarios:'Centri che cercano volontari', title_alimentacion:'Coordinamento alimentare', title_transporte:'Rete di autisti', btn_publicar:'+ Pubblica necessità', btn_ofrecer:'+ Registra negozio / donatore',
    btn_nuevo_evento:'+ Nuovo evento', btn_pedir_voluntarios:'+ Richiedi volontari', hint_transporte:'Le forniture "comprate" necessitano di trasporto.', empty_necesidades:'Nessuna necessità pubblicata ancora.',
    empty_inventario:'Nessun negozio o donatore registrato ancora.', empty_voluntarios:'Nessun centro ha ancora richiesto volontari.', empty_alimentacion:'Nessun evento alimentare ancora.', empty_transporte:'Nessun trasporto attivo ancora.',
    modal_nueva_nec:'Pubblica necessità', modal_nuevo_inv:'Registra negozio o donatore', modal_nuevo_evento:'Registra evento alimentare', modal_voluntario_comida:'Iscriviti per portare cibo',
    modal_pedir_vol:'Richiedi volontari', modal_ofrecerse_vol:'Offriti come volontario', modal_conductor:'🚗 Lo trasporto io', modal_pin:'Conferma con PIN', modal_pago:'Pagamento Mobile',
    btn_publicar_nec:'Pubblica', btn_cancelar:'Annulla', btn_confirmar:'Conferma', btn_usar_ubicacion:'📍 Usa posizione attuale', btn_listo:'Fatto', ig_sub:'Seguici per aggiornamenti in tempo reale',
    stat_donaciones:'Donazioni pubblicate', stat_necesidades:'Bisogni coperti', stat_inspecciones:'Ispezioni richieste', inicio_transparencia_title:'💛 Trasparenza totale', inicio_transparencia_sub:'Ogni donazione ricevuta viene pubblicata qui con foto, importi e destinazione. Nulla resta senza rendiconto.', btn_publicar_donacion:'+ Pubblica', inicio_cta_gofundme:'💚 Dona su GoFundMe', empty_donaciones:'Nessuna donazione pubblicata ancora.<br>Sii il primo a condividere come hai aiutato! 💛',
    estado_necesitado:'🔴 Necessario', estado_comprado:'🟡 Comprato', estado_en_transito:'🟠 In transito', estado_recibido:'🟢 Ricevuto', btn_marcar_comprado:'✅ Segna come comprato', btn_yo_traslado:'🚗 Lo trasporto io',
    btn_marcar_recibido:'🟢 Conferma ricezione', btn_maps:'📍 Vedi sulla mappa', btn_whatsapp:'💬 WhatsApp', match_label:'💡 Disponibile nelle vicinanze!', toast_guardado:'✅ Pubblicato con successo', toast_error:'❌ Compila tutti i campi',
    toast_pin_ok:'✅ Stato aggiornato', toast_pin_error:'❌ PIN errato', toast_geo_ok:'📍 Posizione ottenuta', toast_geo_error:'❌ Impossibile ottenere la posizione', toast_conductor:'🚗 Trasporto registrato!',
    welcome_sub:'Mettiamo in contatto chi ha bisogno con chi può aiutare', welcome_necesito:'Ho bisogno di aiuto', welcome_necesito_sub:'Pubblica una necessità o cerca risorse', welcome_ayudo:'Voglio aiutare', welcome_ayudo_sub:'Dona, fai volontariato o trasporta forniture',
    welcome_insp:'Ho bisogno di un\'ispezione dell\'edificio', welcome_insp_sub:'Richiedere una revisione strutturale del tuo edificio',
    welcome_o:'— o —', welcome_skip:'Visualizza tutta la directory →',
    inicio_lema:'Uniti per chi ne ha piu bisogno', inicio_quienes_title:'Chi siamo?', inicio_p1:'Siamo un gruppo di giovani che ha deciso di agire e unire le forze per aiutare le comunita colpite dal terremoto in Venezuela.', inicio_p2:'Questa iniziativa mira a riunire amici, familiari e chiunque voglia aiutare ma che non sa come farlo dall\'estero o da lontano.', inicio_p3:'Lavoriamo in contatto diretto con chi e in prima linea, il che ci permette di identificare i bisogni reali e consegnare aiuti rapidamente.', inicio_p4:'Attraverso questa piattaforma condivideremo ogni acquisto, consegna e azione, garantendo piena trasparenza sull\'utilizzo di ogni donazione ricevuta.', 
    modal_inspeccion_title:'🏗️ Ispezione dell\'edificio', insp_hint:'📋 Compila il modulo. Riceverai la conferma via WhatsApp.', insp_label_telefono:'Numero WhatsApp *', insp_small_telefono:'Ti contatteremo qui per coordinare la visita.', insp_label_edificio:'Nome dell\'edificio *', insp_label_ubicacion:'Posizione esatta *', insp_label_fotos:'Foto dell\'edificio (travi e colonne) *', insp_small_fotos:'Obbligatorio. Fino a 6 foto. Focati su travi e colonne.', insp_label_antes1967:'L\'edificio è stato costruito prima del 1967? *', insp_label_danos:'Se hai risposto "Sì" — l\'edificio ha subito danni o riparazioni?', insp_label_planos:'Hai piante strutturali disponibili? *', insp_btn_enviar:'Invia richiesta',
    donor_title:'Come vuoi aiutare?', donor_gofundme:'Dona denaro', donor_gofundme_sub:'GoFundMe · va direttamente a chi ne ha bisogno',
    donor_pagomovil:'Pagamento Mobile', donor_pagomovil_sub:'Bonifico bancario', donor_insumos:'Offri forniture', donor_insumos_sub:'Ho medicine, cibo...', donor_transporte:'Trasporta forniture', donor_transporte_sub:'Ho un veicolo e posso consegnare',
    donor_comida:'Porta cibo', donor_comida_sub:'Iscriviti per la distribuzione', donor_voluntario:'Fai volontariato', donor_voluntario_sub:'Supporta un centro che ha bisogno di aiuto',
    ph_ciudad:'E.g. Caracas, Miranda…', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital name…', ph_descripcion_nec:'Describe what is needed and how urgently…', ph_unidad:'units, boxes…', ph_nombre_local:'Central Pharmacy, Juan Pérez…', ph_desc_inv:'We have medicine, equipment, food…', ph_productos:'Sterile gauze\nSaline solution\nNitrile gloves', ph_direccion:'Main Ave, store 4…', ph_horario:'Mon–Fri 8am–6pm', ph_prod_precios:'E.g. Gauze $2, Alcohol $3…', ph_ubicacion:'Main Ave, store 4', ph_articulos:'Clothing, medicine, non-perishable food…', ph_organizacion:'E.g. Red Cross Foundation', ph_cedula:'ID-12345678', ph_nombre_centro:'Las Mercedes Shelter, Red Cross…', ph_tareas:'Distribute food, sort donations…', ph_horario_vol:'Saturdays 9am–1pm, urgent this week…', ph_contacto:'Name of person in charge', ph_tu_nombre:'Your name', ph_aportar:'I can bring my vehicle, I have first aid experience…', ph_nombre_lugar:'Los Caobos Park…', ph_personas:'50', ph_que_llevas:'Rice, beans, water…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5,000 Bs. / 50 USD', ph_don_desc:'We bought 20 boxes of gauze for Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'Categoria *', lbl_tipo_sangre:'Blood type *', lbl_descripcion:'Descrizione *', lbl_cantidad:'Quantità *', lbl_unidad:'Unit', lbl_ciudad_estado:'Città / Stato *', lbl_hospital:'Hospital or center (optional)', lbl_pin:'Confirmation PIN (4 digits) *', lbl_nombre_local:'Store or person name *', lbl_descripcion_ofreces:'Description of what you offer *', lbl_productos:'Available products (one per line)', lbl_cantidad_disp:'Available quantity', lbl_precio:'Price in Bs. (leave blank if free donation)', lbl_direccion:'Exact address', lbl_horario:'Opening hours', lbl_telefono_wa:'Telefono / WhatsApp *', lbl_prod_precios:'Products and Prices *', lbl_ubicacion_exacta:'Exact location *', lbl_telefono:'Phone *', lbl_soy:'I am... *', lbl_articulos:'What items do you have available? *', lbl_organizacion:'Where are you from? (Organization) *', lbl_donde_estan:'Where are you? (Exact address) *', lbl_cedula:'ID / Identity *', lbl_ciudad:'City *', lbl_nombre_centro:'Center or organization name *', lbl_cuantos_vol:'How many volunteers do you need? *', lbl_tareas:'For what tasks? *', lbl_horario_vol:'Schedule when needed', lbl_contacto:'Contact person', lbl_nombre_completo:'Full name *', lbl_cedula_id:'ID / Passport *', lbl_que_aportas:'What can you contribute? (optional)', lbl_nombre_lugar:'Place name *', lbl_tipo_lugar:'Place type *', lbl_turno:'Shift *', lbl_fecha:'Date *', lbl_personas:'Estimated people', lbl_que_llevas:'What are you bringing? *', lbl_telefono_op:'Phone (optional)', lbl_nombre_alias:'Name or alias *', lbl_cedula_pas:'ID / Passport *', lbl_ciudad_origen:'Origin city *', lbl_ciudad_destino:'Destination city *', lbl_monto:'Amount received (Bs. or $) *', lbl_don_uso:'What was it used for? *', lbl_don_donde:'Where was it delivered? *', lbl_don_media:'Photos or videos (optional)', lbl_registrar:'Register', sel_categoria:'Seleziona una categoria', sel_tipo:'Seleziona tipo', sel_selecciona:'Seleziona', sel_turno:'Shift', opt_centro:'Collection Center', opt_persona:'Individual Person', opt_parque:'Park', opt_refugio:'Shelter', opt_centro_acopio:'Collection center', opt_otro:'Other', opt_desayuno:'🌅 Colazione', opt_almuerzo:'☀️ Pranzo', opt_cena:'🌙 Cena', small_pin:'You will use this to confirm when purchased or received.', small_productos:'They will appear as tags on your card.', small_geo_mapa:'This is how you appear on the map when someone presses "View on map".', small_seguridad:'Required for security. Not shared publicly.', small_trazabilidad:'Required for security and traceability.', small_don_media:'You can upload up to 4 files (photos or short videos).', btn_geolocal:'📍 Geolocate my location', btn_publicar_sol:'Pubblica richiesta', btn_ofrecerme:'Offrirmi', btn_crear_evento:'Crea evento', btn_anotarme:'Iscrivermi', btn_confirmar_traslado:'Conferma trasporto', pin_error_msg:'PIN errato. Riprova.', pago_banco:'Banca', pago_telefono:'Telefono', pago_cedula:'ID', hint_venta:'Find stores offering supplies for sale with prices and contact info.', hint_acopio:'Collected supplies that already have collection centers or individual holders.', hint_voluntarios:'Are you a center, shelter or organization? Post how many volunteers you need and for what. People sign up directly.',
    time_ahora:'Proprio ora', time_min:'minuto', time_mins:'minuti', time_hora:'ora', time_horas:'ore', time_dia:'giorno', time_dias:'giorni',
    modal_confirmar_titulo:'Confermare azione', lbl_tu_nombre:'Il tuo nome *', lbl_tu_whatsapp:'Il tuo WhatsApp *', confirmar_error_msg:'Inserisci il tuo nome e WhatsApp.',
  },
  ar: {
    nav_venta: '🏷️ مبيعات', nav_acopio: '📦 مراكز التجميع', title_venta: 'أماكن البيع', title_acopio: 'مراكز التجميع',
    btn_registrar_venta: '+ تسجيل مبيعات', btn_registrar_acopio: '+ تسجيل مركز', empty_venta: 'لا توجد أماكن بيع مسجلة بعد.', empty_acopio: 'لا توجد مراكز تجميع مسجلة بعد.',
    modal_nueva_venta: 'تسجيل مبيعات', modal_nuevo_acopio: 'تسجيل مركز تجميع', welcome_local: 'أنا متجر محلي', welcome_local_sub: 'عرض المنتجات للبيع، الموقع والأسعار',
    banner_gofundme:'💛 تبرع في GoFundMe', banner_pagomovil:'📲 الدفع عبر الهاتف', banner_psico:'🧠 الدعم النفسي', banner_ig:'📸 إنستغرام', logo_entre:'بين الأصدقاء لأجل', ig_seguir:'تابعنا',
    nav_inicio:'ℹ️ من نحن', nav_inspeccion:'🏗️ فحص المبنى',
    nav_necesidades:'🔴 الاحتياجات', nav_inventario:'🏪 المتاجر والمتبرعون', nav_voluntarios:'🤝 المتطوعون', nav_alimentacion:'🍽️ المساعدات الغذائية', nav_transporte:'🚗 النقل',
    label_ciudad:'المدينة / الولاية', label_categoria:'الفئة', btn_ubicacion:'📍 موقعي', cat_todas:'الكل', cat_sangre:'🩸 الدم', cat_insumos:'🏥 المستلزمات الطبية',
    cat_rescate:'🦺 الإنقاذ', cat_refugio:'⛺ المأوى والملابس', cat_alimentos:'🥫 الطعام والماء', title_necesidades:'الاحتياجات النشطة', title_inventario:'المتاجر والمتبرعون',
    title_voluntarios:'مراكز تبحث عن متطوعين', title_alimentacion:'تنسيق الغذاء', title_transporte:'شبكة السائقين', btn_publicar:'+ نشر حاجة', btn_ofrecer:'+ تسجيل متجر / متبرع',
    btn_nuevo_evento:'+ حدث جديد', btn_pedir_voluntarios:'+ طلب متطوعين', hint_transporte:'تحتاج المستلزمات "المشتراة" إلى نقل.', empty_necesidades:'لم يتم نشر أي احتياجات بعد.',
    empty_inventario:'لم يتم تسجيل أي متاجر أو متبرعين بعد.', empty_voluntarios:'لم يطلب أي مركز متطوعين بعد.', empty_alimentacion:'لا توجد أحداث غذائية بعد.', empty_transporte:'لا توجد وسائل نقل نشطة بعد.',
    modal_nueva_nec:'نشر حاجة', modal_nuevo_inv:'تسجيل متجر أو متبرع', modal_nuevo_evento:'تسجيل حدث غذائي', modal_voluntario_comida:'سجل لإحضار الطعام',
    modal_pedir_vol:'طلب متطوعين لمركزي', modal_ofrecerse_vol:'تطوع', modal_conductor:'🚗 سأقوم بنقله', modal_pin:'تأكيد باستخدام PIN', modal_pago:'الدفع عبر الهاتف',
    btn_publicar_nec:'نشر', btn_cancelar:'إلغاء', btn_confirmar:'تأكيد', btn_usar_ubicacion:'📍 استخدام موقعي الحالي', btn_listo:'تم', ig_sub:'تابعنا للحصول على التحديثات الفورية',
    stat_donaciones:'التبرعات المنشورة', stat_necesidades:'الاحتياجات المغطاة', stat_inspecciones:'الفحوصات المطلوبة', inicio_transparencia_title:'💛 شفافية كاملة', inicio_transparencia_sub:'كل تبرع يُنشر هنا مع الصور والمبالغ والوجهة. لا شيء يبقى دون محاسبة.', btn_publicar_donacion:'+ نشر', inicio_cta_gofundme:'💚 تبرع في GoFundMe', empty_donaciones:'لا توجد تبرعات منشورة بعد.<br>كن أول من يشارك كيف ساعد! 💛',
    estado_necesitado:'🔴 مطلوب', estado_comprado:'🟡 تم الشراء', estado_en_transito:'🟠 في الطريق', estado_recibido:'🟢 تم الاستلام', btn_marcar_comprado:'✅ تعليم كمشترى', btn_yo_traslado:'🚗 سأقوم بنقله',
    btn_marcar_recibido:'🟢 تأكيد الاستلام', btn_maps:'📍 عرض الخريطة', btn_whatsapp:'💬 واتساب', match_label:'💡 متاح بالجوار!', toast_guardado:'✅ تم النشر بنجاح', toast_error:'❌ يرجى ملء جميع الحقول',
    toast_pin_ok:'✅ تم تحديث الحالة', toast_pin_error:'❌ PIN غير صحيح', toast_geo_ok:'📍 تم الحصول على الموقع', toast_geo_error:'❌ تعذر الحصول على الموقع', toast_conductor:'🚗 تم تسجيل النقل!',
    welcome_sub:'نربط بين من يحتاج ومن يمكنه المساعدة', welcome_necesito:'أحتاج إلى المساعدة', welcome_necesito_sub:'نشر حاجة أو البحث عن موارد', welcome_ayudo:'أريد المساعدة', welcome_ayudo_sub:'تبرع، تطوع أو انقل المستلزمات',
    welcome_insp:'أحتاج إلى فحص المبنى', welcome_insp_sub:'طلب مراجعة هيكلية لمبناك',
    welcome_o:'— أو —', welcome_skip:'تصفح الدليل بالكامل →',
    inicio_lema:'متحدون من أجل من يحتاجون أكثر', inicio_quienes_title:'من نحن؟', inicio_p1:'نحن مجموعة من الشباب الذين قرروا، في مواجهة الطوارئ الناجمة عن الزلزال في فنزويلا، التحرك وتوحيد الجهود لمساعدة المجتمعات المتضررة.', inicio_p2:'تهدف هذه المبادرة إلى جمع الأصدقاء والعائلة وكل من يريد المساعدة ولكنه في الخارج أو بعيد عن المناطق المتضررة ولا يعرف كيف يفعل ذلك.', inicio_p3:'نعمل على اتصال مباشر مع من هم في الخطوط الأمامية، مما يتيح لنا تحديد الاحتياجات الفعلية وتقديم المساعدة بسرعة ومباشرة.', inicio_p4:'من خلال هذه المنصة، سنشارك تفاصيل كل عملية شراء وتسليم وإجراء، مع ضمان الشفافية الكاملة في استخدام كل تبرع يُستلم.', 
    modal_inspeccion_title:'🏗️ فحص المبنى', insp_hint:'📋 أكمل النموذج. ستتلقى تأكيداً عبر واتساب.', insp_label_telefono:'رقم واتساب *', insp_small_telefono:'سنتواصل معك هنا لتنسيق الزيارة.', insp_label_edificio:'اسم المبنى *', insp_label_ubicacion:'الموقع الدقيق *', insp_label_fotos:'صور المبنى (الكمرات والأعمدة) *', insp_small_fotos:'إلزامي. حتى 6 صور. ركز على الكمرات والأعمدة.', insp_label_antes1967:'هل بُني المبنى قبل عام 1967؟ *', insp_label_danos:'إذا أجبت بـ "نعم" — هل عانى المبنى من أضرار أو إصلاحات؟', insp_label_planos:'هل لديك مخططات هيكلية متاحة؟ *', insp_btn_enviar:'إرسال الطلب',
    donor_title:'كيف تريد المساعدة؟', donor_gofundme:'تبرع بالمال', donor_gofundme_sub:'GoFundMe · يذهب مباشرة لمن هم في أمس الحاجة',
    donor_pagomovil:'الدفع عبر الهاتف', donor_pagomovil_sub:'تحويل مصرفي', donor_insumos:'تقديم مستلزمات', donor_insumos_sub:'لدي دواء، طعام...', donor_transporte:'نقل المستلزمات', donor_transporte_sub:'لدي مركبة ويمكنني التوصيل',
    donor_comida:'إحضار طعام', donor_comida_sub:'التسجيل في دورية توزيع الطعام', donor_voluntario:'كن متطوعاً', donor_voluntario_sub:'دعم مركز يحتاج إلى مساعدة',
    ph_ciudad:'E.g. Caracas, Miranda…', ph_ciudad_vzla:'Caracas, Miranda', ph_ciudad_vzla2:'Maracaibo, Zulia', ph_ciudad_ev:'Valencia, Carabobo', ph_hospital:'Hospital name…', ph_descripcion_nec:'Describe what is needed and how urgently…', ph_unidad:'units, boxes…', ph_nombre_local:'Central Pharmacy, Juan Pérez…', ph_desc_inv:'We have medicine, equipment, food…', ph_productos:'Sterile gauze\nSaline solution\nNitrile gloves', ph_direccion:'Main Ave, store 4…', ph_horario:'Mon–Fri 8am–6pm', ph_prod_precios:'E.g. Gauze $2, Alcohol $3…', ph_ubicacion:'Main Ave, store 4', ph_articulos:'Clothing, medicine, non-perishable food…', ph_organizacion:'E.g. Red Cross Foundation', ph_cedula:'ID-12345678', ph_nombre_centro:'Las Mercedes Shelter, Red Cross…', ph_tareas:'Distribute food, sort donations…', ph_horario_vol:'Saturdays 9am–1pm, urgent this week…', ph_contacto:'Name of person in charge', ph_tu_nombre:'Your name', ph_aportar:'I can bring my vehicle, I have first aid experience…', ph_nombre_lugar:'Los Caobos Park…', ph_personas:'50', ph_que_llevas:'Rice, beans, water…', ph_origen:'Caracas', ph_destino:'Valencia', ph_monto:'5,000 Bs. / 50 USD', ph_don_desc:'We bought 20 boxes of gauze for Hospital Vargas…', ph_don_donde:'Hospital Vargas, Caracas', lbl_categoria:'الفئة *', lbl_tipo_sangre:'فصيلة الدم *', lbl_descripcion:'الوصف *', lbl_cantidad:'الكمية *', lbl_unidad:'Unit', lbl_ciudad_estado:'المدينة / الولاية *', lbl_hospital:'Hospital or center (optional)', lbl_pin:'Confirmation PIN (4 digits) *', lbl_nombre_local:'Store or person name *', lbl_descripcion_ofreces:'Description of what you offer *', lbl_productos:'Available products (one per line)', lbl_cantidad_disp:'Available quantity', lbl_precio:'Price in Bs. (leave blank if free donation)', lbl_direccion:'Exact address', lbl_horario:'Opening hours', lbl_telefono_wa:'الهاتف / واتساب *', lbl_prod_precios:'Products and Prices *', lbl_ubicacion_exacta:'Exact location *', lbl_telefono:'Phone *', lbl_soy:'I am... *', lbl_articulos:'What items do you have available? *', lbl_organizacion:'Where are you from? (Organization) *', lbl_donde_estan:'Where are you? (Exact address) *', lbl_cedula:'ID / Identity *', lbl_ciudad:'المدينة *', lbl_nombre_centro:'Center or organization name *', lbl_cuantos_vol:'How many volunteers do you need? *', lbl_tareas:'For what tasks? *', lbl_horario_vol:'Schedule when needed', lbl_contacto:'Contact person', lbl_nombre_completo:'الاسم الكامل *', lbl_cedula_id:'ID / Passport *', lbl_que_aportas:'What can you contribute? (optional)', lbl_nombre_lugar:'Place name *', lbl_tipo_lugar:'Place type *', lbl_turno:'Shift *', lbl_fecha:'Date *', lbl_personas:'Estimated people', lbl_que_llevas:'What are you bringing? *', lbl_telefono_op:'Phone (optional)', lbl_nombre_alias:'Name or alias *', lbl_cedula_pas:'ID / Passport *', lbl_ciudad_origen:'Origin city *', lbl_ciudad_destino:'Destination city *', lbl_monto:'Amount received (Bs. or $) *', lbl_don_uso:'What was it used for? *', lbl_don_donde:'Where was it delivered? *', lbl_don_media:'Photos or videos (optional)', lbl_registrar:'Register', sel_categoria:'اختر فئة', sel_tipo:'اختر النوع', sel_selecciona:'اختر', sel_turno:'Shift', opt_centro:'Collection Center', opt_persona:'Individual Person', opt_parque:'Park', opt_refugio:'Shelter', opt_centro_acopio:'Collection center', opt_otro:'Other', opt_desayuno:'🌅 إفطار', opt_almuerzo:'☀️ غداء', opt_cena:'🌙 عشاء', small_pin:'You will use this to confirm when purchased or received.', small_productos:'They will appear as tags on your card.', small_geo_mapa:'This is how you appear on the map when someone presses "View on map".', small_seguridad:'Required for security. Not shared publicly.', small_trazabilidad:'Required for security and traceability.', small_don_media:'You can upload up to 4 files (photos or short videos).', btn_geolocal:'📍 Geolocate my location', btn_publicar_sol:'نشر الطلب', btn_ofrecerme:'التطوع', btn_crear_evento:'إنشاء حدث', btn_anotarme:'التسجيل', btn_confirmar_traslado:'تأكيد النقل', pin_error_msg:'رمز PIN غير صحيح. حاول مرة أخرى.', pago_banco:'البنك', pago_telefono:'الهاتف', pago_cedula:'الهوية', hint_venta:'Find stores offering supplies for sale with prices and contact info.', hint_acopio:'Collected supplies that already have collection centers or individual holders.', hint_voluntarios:'Are you a center, shelter or organization? Post how many volunteers you need and for what. People sign up directly.',
    time_ahora:'الآن', time_min:'دقيقة', time_mins:'دقائق', time_hora:'ساعة', time_horas:'ساعات', time_dia:'يوم', time_dias:'أيام',
    modal_confirmar_titulo:'تأكيد الإجراء', lbl_tu_nombre:'اسمك *', lbl_tu_whatsapp:'واتساب الخاص بك *', confirmar_error_msg:'أكمل اسمك وواتساب.',
  }
};

let LANG = 'es';
const t = k => (I18N[LANG]?.[k] ?? I18N.es[k] ?? k);

function setLang(lang) {
  LANG = lang;
  if (lang === 'ar') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.documentElement.lang = lang;
  updateFormTranslations();
  renderAll();
}

function setText(id, key) {
  const el = document.getElementById(id);
  if (el) el.textContent = t(key);
}
function setPlaceholder(id, key) {
  const el = document.getElementById(id);
  if (el) el.placeholder = t(key);
}
function setSelectOption(selectId, optionIndex, key) {
  const sel = document.getElementById(selectId);
  if (sel && sel.options[optionIndex]) sel.options[optionIndex].text = t(key);
}

function updateFormTranslations() {
  // ── Filter bar ──
  setPlaceholder('filtroCiudad', 'ph_ciudad');

  // ── Section hints ──
  setText('hint_venta_el',       'hint_venta');
  setText('hint_acopio_el',      'hint_acopio');
  setText('hint_voluntarios_el', 'hint_voluntarios');

  // ── Modal: Nueva Necesidad ──
  setText('lbl_nec_cat',     'lbl_categoria');
  setText('lbl_nec_sangre',  'lbl_tipo_sangre');
  setText('lbl_nec_desc',    'lbl_descripcion');
  setText('lbl_nec_cant',    'lbl_cantidad');
  setText('lbl_nec_unid',    'lbl_unidad');
  setText('lbl_nec_ciudad',  'lbl_ciudad_estado');
  setText('lbl_nec_hosp',    'lbl_hospital');
  setText('lbl_nec_tel',     'lbl_telefono_wa');
  setText('btn_nec_geo',     'btn_usar_ubicacion');
  setText('btn_nec_cancel',  'btn_cancelar');
  setText('btn_nec_submit',  'btn_publicar_nec');
  setSelectOption('nec_categoria', 0, 'sel_categoria');
  setSelectOption('nec_tipo_sangre', 0, 'sel_tipo');
  setPlaceholder('nec_descripcion', 'ph_descripcion_nec');
  setPlaceholder('nec_unidad',      'ph_unidad');
  setPlaceholder('nec_ciudad',      'ph_ciudad_vzla');
  setPlaceholder('nec_hospital',    'ph_hospital');

  // ── Modal: Nuevo Inventario ──
  setText('lbl_inv_nombre',  'lbl_nombre_local');
  setText('lbl_inv_cat',     'lbl_categoria');
  setText('lbl_inv_desc',    'lbl_descripcion_ofreces');
  setText('lbl_inv_prod',    'lbl_productos');
  setText('small_inv_prod',  'small_productos');
  setText('lbl_inv_cant',    'lbl_cantidad_disp');
  setText('lbl_inv_unid',    'lbl_unidad');
  setText('lbl_inv_precio',  'lbl_precio');
  setText('lbl_inv_ciudad',  'lbl_ciudad_estado');
  setText('lbl_inv_dir',     'lbl_direccion');
  setText('lbl_inv_horario', 'lbl_horario');
  setText('lbl_inv_tel',     'lbl_telefono_wa');
  setText('small_inv_geo',   'small_geo_mapa');
  setText('btn_inv_geo',     'btn_geolocal');
  setText('btn_inv_cancel',  'btn_cancelar');
  setText('btn_inv_submit',  'lbl_registrar');
  setSelectOption('inv_categoria', 0, 'sel_categoria');
  setPlaceholder('inv_nombre_local', 'ph_nombre_local');
  setPlaceholder('inv_descripcion',  'ph_desc_inv');
  setPlaceholder('inv_productos',    'ph_productos');
  setPlaceholder('inv_ciudad',       'ph_ciudad_vzla2');
  setPlaceholder('inv_direccion',    'ph_direccion');
  setPlaceholder('inv_horario',      'ph_horario');

  // ── Modal: Nueva Venta ──
  setText('lbl_vta_nombre',  'lbl_nombre_local');
  setText('lbl_vta_prod',    'lbl_prod_precios');
  setText('lbl_vta_ubic',    'lbl_ubicacion_exacta');
  setText('lbl_vta_tel',     'lbl_telefono');
  setText('btn_vta_geo',     'btn_geolocal');
  setText('btn_vta_cancel',  'btn_cancelar');
  setText('btn_vta_submit',  'btn_publicar_nec');
  setPlaceholder('vta_nombre',    'ph_nombre_local');
  setPlaceholder('vta_productos', 'ph_prod_precios');
  setPlaceholder('vta_ubicacion', 'ph_ubicacion');
  setPlaceholder('vta_telefono',  'ph_telefono');

  // ── Modal: Acopio ──
  setText('lbl_acp_tipo',     'lbl_soy');
  setText('lbl_acp_arts',     'lbl_articulos');
  setText('lbl_acp_origen',   'lbl_organizacion');
  setText('lbl_acp_dir',      'lbl_donde_estan');
  setText('lbl_acp_cedula',   'lbl_cedula');
  setText('lbl_acp_tel',      'lbl_telefono');
  setText('lbl_acp_ciudad',   'lbl_ciudad');
  setText('btn_acp_cancel',   'btn_cancelar');
  setText('btn_acp_submit',   'lbl_registrar');
  setSelectOption('acp_tipo', 0, 'sel_selecciona');
  setSelectOption('acp_tipo', 1, 'opt_centro');
  setSelectOption('acp_tipo', 2, 'opt_persona');
  setPlaceholder('acp_articulos', 'ph_articulos');
  setPlaceholder('acp_origen',    'ph_organizacion');
  setPlaceholder('acp_direccion', 'ph_ubicacion');
  setPlaceholder('acp_cedula',    'ph_cedula');
  setPlaceholder('acp_ciudad',    'ph_ciudad');

  // ── Modal: Pedir Voluntarios ──
  setText('lbl_sv_nombre',   'lbl_nombre_centro');
  setText('lbl_sv_ciudad',   'lbl_ciudad_estado');
  setText('lbl_sv_cantidad', 'lbl_cuantos_vol');
  setText('lbl_sv_tareas',   'lbl_tareas');
  setText('lbl_sv_horario',  'lbl_horario_vol');
  setText('lbl_sv_contacto', 'lbl_contacto');
  setText('lbl_sv_tel',      'lbl_telefono_wa');
  setText('btn_sv_cancel',   'btn_cancelar');
  setText('btn_sv_submit',   'btn_publicar_sol');
  setPlaceholder('sv_nombre_centro', 'ph_nombre_centro');
  setPlaceholder('sv_ciudad',        'ph_ciudad_vzla');
  setPlaceholder('sv_tareas',        'ph_tareas');
  setPlaceholder('sv_horario',       'ph_horario_vol');
  setPlaceholder('sv_contacto',      'ph_contacto');
  setPlaceholder('sv_telefono',      'ph_telefono');

  // ── Modal: Ofrecerse Voluntario ──
  setText('lbl_ov_nombre',  'lbl_nombre_completo');
  setText('lbl_ov_cedula',  'lbl_cedula_id');
  setText('small_ov_cedula','small_seguridad');
  setText('lbl_ov_tel',     'lbl_telefono_wa');
  setText('lbl_ov_nota',    'lbl_que_aportas');
  setText('btn_ov_cancel',  'btn_cancelar');
  setText('btn_ov_submit',  'btn_ofrecerme');
  setPlaceholder('ov_nombre',   'ph_tu_nombre');
  setPlaceholder('ov_cedula',   'ph_cedula');
  setPlaceholder('ov_telefono', 'ph_telefono');
  setPlaceholder('ov_nota',     'ph_aportar');

  // ── Modal: Evento Alimentación ──
  setText('lbl_ev_nombre',   'lbl_nombre_lugar');
  setText('lbl_ev_tipo',     'lbl_tipo_lugar');
  setText('lbl_ev_turno',    'lbl_turno');
  setText('lbl_ev_fecha',    'lbl_fecha');
  setText('lbl_ev_ciudad',   'lbl_ciudad_estado');
  setText('lbl_ev_personas', 'lbl_personas');
  setText('btn_ev_geo',      'btn_geolocal');
  setText('btn_ev_cancel',   'btn_cancelar');
  setText('btn_ev_submit',   'btn_crear_evento');
  setSelectOption('ev_tipo',  0, 'sel_selecciona');
  setSelectOption('ev_tipo',  1, 'opt_parque');
  setSelectOption('ev_tipo',  2, 'opt_refugio');
  setSelectOption('ev_tipo',  3, 'opt_centro_acopio');
  setSelectOption('ev_tipo',  4, 'opt_otro');
  setSelectOption('ev_turno', 0, 'sel_turno');
  setSelectOption('ev_turno', 1, 'opt_desayuno');
  setSelectOption('ev_turno', 2, 'opt_almuerzo');
  setSelectOption('ev_turno', 3, 'opt_cena');
  setPlaceholder('ev_nombre',   'ph_nombre_lugar');
  setPlaceholder('ev_ciudad',   'ph_ciudad_ev');
  setPlaceholder('ev_personas', 'ph_personas');

  // ── Modal: Voluntario Comida ──
  setText('lbl_vol_nombre',  'lbl_nombre_completo');
  setText('lbl_vol_cedula',  'lbl_cedula_id');
  setText('small_vol_cedula','small_seguridad');
  setText('lbl_vol_lleva',   'lbl_que_llevas');
  setText('lbl_vol_tel',     'lbl_telefono_op');
  setText('btn_vol_cancel',  'btn_cancelar');
  setText('btn_vol_submit',  'btn_anotarme');
  setPlaceholder('vol_nombre',    'ph_tu_nombre');
  setPlaceholder('vol_cedula',    'ph_cedula');
  setPlaceholder('vol_que_lleva', 'ph_que_llevas');
  setPlaceholder('vol_telefono',  'ph_telefono');

  // ── Modal: PIN ──
  // ── Modal: Confirmar Acción ──
  setText('modal_confirmar_title', 'modal_confirmar_titulo');
  setText('lbl_confirmar_nombre',  'lbl_tu_nombre');
  setText('lbl_confirmar_tel',     'lbl_tu_whatsapp');
  setText('confirmarError',        'confirmar_error_msg');
  setText('btn_confirmar_cancel',  'btn_cancelar');
  setText('btn_confirmar_accion',  'btn_confirmar');

  // ── Modal: Pago Móvil ──
  setText('pago_lbl_banco', 'pago_banco');
  setText('pago_lbl_tel',   'pago_telefono');
  setText('pago_lbl_ced',   'pago_cedula');

  // ── Modal: Publicar Donación ──
  setText('lbl_don_monto',  'lbl_monto');
  setText('lbl_don_desc',   'lbl_don_uso');
  setText('lbl_don_donde',  'lbl_don_donde');
  setText('lbl_don_fecha',  'lbl_fecha');
  setText('lbl_don_media',  'lbl_don_media');
  setText('small_don_media','small_don_media');
  setText('btn_don_cancel', 'btn_cancelar');
  setText('btn_don_submit', 'btn_publicar_nec');
  setPlaceholder('don_monto',       'ph_monto');
  setPlaceholder('don_descripcion', 'ph_don_desc');
  setPlaceholder('don_donde',       'ph_don_donde');
}

/* ─── Utils ─── */
function uuid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
}
function now() { return new Date().toISOString(); }
function timeAgo(isoDate) {
  if (!isoDate) return '';
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const min = Math.floor(diffMs / 60000);
  const hr  = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (min < 1)  return t('time_ahora');
  if (min < 60) return `${min} ${min === 1 ? t('time_min') : t('time_mins')}`;
  if (hr  < 24) return `${hr} ${hr === 1 ? t('time_hora') : t('time_horas')}`;
  if (day < 7)  return `${day} ${day === 1 ? t('time_dia') : t('time_dias')}`;
  const d = new Date(isoDate);
  return d.toLocaleDateString(LANG === 'ar' ? 'ar' : LANG, { day:'numeric', month:'short' });
}

function showToast(msg, dur = 2800) {
  document.querySelector('.toast')?.remove();
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), dur);
}

/* ─── Compresión imagen <300KB ─── */
function compressImage(file, maxKB = 300) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1200;
        let { width: w, height: h } = img;
        if (w > maxDim || h > maxDim) {
          if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; }
          else { w = Math.round(w * maxDim / h); h = maxDim; }
        }
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        let q = 0.8, url = c.toDataURL('image/jpeg', q);
        while (url.length > maxKB * 1024 * 1.37 && q > 0.2) { q -= 0.1; url = c.toDataURL('image/jpeg', q); }
        res(url);
      };
      img.onerror = rej;
      img.src = e.target.result;
    };
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
}

/* ─── DB (Firestore vía REST API con fetch — sin SDK, sin streaming) ─── */
/* Usamos la REST API de Firestore con peticiones fetch() normales, en vez del
   SDK de JavaScript. El SDK abre conexiones tipo streaming (WebChannel) que
   están bloqueadas en redes con restricciones (confirmado en Venezuela).
   fetch() es HTTP estándar — el mismo tipo de petición que carga cualquier
   página web, sin protocolos especiales que puedan ser bloqueados. */
const FIRESTORE_COLLECTIONS = ['insumos','inventario','alimentacion','voluntarios_comida','transporte','solicitudes_voluntarios','respuestas_voluntarios','ventas','acopio','inspecciones','donaciones_pub'];
const _dbCache = {};
FIRESTORE_COLLECTIONS.forEach(c => _dbCache[c] = []);
let _dbReady = false;
let _dbReadyCallbacks = [];
let _syncErrorCount = 0;
const POLL_INTERVAL_MS = 12000; // 12 segundos

function onDbReady(cb) {
  if (_dbReady) cb();
  else _dbReadyCallbacks.push(cb);
}

function firestoreBaseUrl() {
  const { projectId } = window.__firestoreConfig;
  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/%28default%29/documents`;
}

/* Convierte un valor JS a formato de "Value" de Firestore REST */
function toFirestoreValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'string') return { stringValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') {
    return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  }
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toFirestoreValue) } };
  if (typeof v === 'object') {
    const fields = {};
    Object.entries(v).forEach(([k, val]) => { fields[k] = toFirestoreValue(val); });
    return { mapValue: { fields } };
  }
  return { stringValue: String(v) };
}

/* Convierte un documento de Firestore REST de vuelta a un objeto JS plano */
function fromFirestoreFields(fields) {
  const obj = {};
  if (!fields) return obj;
  Object.entries(fields).forEach(([key, val]) => {
    obj[key] = fromFirestoreValue(val);
  });
  return obj;
}
function fromFirestoreValue(val) {
  if (!val) return null;
  if ('stringValue' in val) return val.stringValue;
  if ('integerValue' in val) return parseInt(val.integerValue, 10);
  if ('doubleValue' in val) return val.doubleValue;
  if ('booleanValue' in val) return val.booleanValue;
  if ('nullValue' in val) return null;
  if ('arrayValue' in val) return (val.arrayValue.values || []).map(fromFirestoreValue);
  if ('mapValue' in val) return fromFirestoreFields(val.mapValue.fields);
  if ('timestampValue' in val) return val.timestampValue;
  return null;
}

async function fetchCollection(colName) {
  const url = `${firestoreBaseUrl()}/${colName}?key=${window.__firestoreConfig.apiKey}&pageSize=300`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Firestore GET ${colName} falló: ${res.status}`);
  const data = await res.json();
  const docs = (data.documents || []).map(d => {
    const id = d.name.split('/').pop();
    return { id, ...fromFirestoreFields(d.fields) };
  });
  docs.sort((a, b) => (b.creado_en || '').localeCompare(a.creado_en || ''));
  return docs;
}

async function writeDocument(colName, docId, data) {
  const url = `${firestoreBaseUrl()}/${colName}/${docId}?key=${window.__firestoreConfig.apiKey}`;
  const fields = {};
  Object.entries(data).forEach(([k, v]) => { fields[k] = toFirestoreValue(v); });
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields })
  });
  if (!res.ok) throw new Error(`Firestore PATCH ${colName}/${docId} falló: ${res.status}`);
  return res.json();
}

async function syncAllCollections({ isFirstLoad } = {}) {
  let anyChanged = false;
  const results = await Promise.allSettled(FIRESTORE_COLLECTIONS.map(colName => fetchCollection(colName)));
  results.forEach((result, i) => {
    const colName = FIRESTORE_COLLECTIONS[i];
    if (result.status === 'fulfilled') {
      const newDocs = result.value;
      const oldStr = JSON.stringify(_dbCache[colName]);
      const newStr = JSON.stringify(newDocs);
      if (oldStr !== newStr) anyChanged = true;
      _dbCache[colName] = newDocs;
      _syncErrorCount = 0;
    } else {
      console.error('Error al sincronizar', colName, result.reason);
      _syncErrorCount++;
    }
  });
  if (isFirstLoad) {
    _dbReady = true;
    _dbReadyCallbacks.forEach(cb => cb());
    _dbReadyCallbacks = [];
  } else if (anyChanged) {
    renderAll();
  }
  updateSyncStatusBanner();
}

function updateSyncStatusBanner() {
  const banner = document.getElementById('syncErrorBanner');
  if (!banner) return;
  banner.classList.toggle('hidden', _syncErrorCount < 3);
}

function initFirestoreSync() {
  syncAllCollections({ isFirstLoad: true });
  setInterval(() => syncAllCollections({ isFirstLoad: false }), POLL_INTERVAL_MS);
}

const DB = {
  get(col) { return _dbCache[col] || []; },
  find(col, fn) { return DB.get(col).filter(fn); },
  add(col, item) {
    const finalItem = { ...item, id: item.id || uuid() };
    const { id, ...dataSinId } = finalItem;
    writeDocument(col, id, dataSinId)
      .then(() => syncAllCollections({ isFirstLoad: false }))
      .catch(err => console.error('Error al guardar en', col, err));
    return finalItem;
  },
  update(col, id, patch) {
    writeDocument(col, id, { ...patch, actualizado_en: now() })
      .then(() => syncAllCollections({ isFirstLoad: false }))
      .catch(err => console.error('Error al actualizar', col, id, err));
  },
};

/* ─── MÓDULO D: Auto-Match (cálculo local, no se guarda en Firestore) ─── */
let _autoMatches = [];
function runAutoMatch(ciudad) {
  const necesidades = DB.find('insumos', r => r.estado_ayuda === 'necesitado' && r.ciudad.toLowerCase() === ciudad.toLowerCase());
  const disponibles = DB.find('inventario', r => r.activo && r.ciudad.toLowerCase() === ciudad.toLowerCase());
  const matches = [];
  necesidades.forEach(nec => {
    disponibles.forEach(inv => {
      if (inv.categoria !== nec.categoria) return;
      const score = calcScore(nec.descripcion, inv.descripcion);
      if (score > 0.2) matches.push({ id: uuid(), id_insumo: nec.id, id_inventario: inv.id, ciudad, score_relevancia: score, activo: true, generado_en: now() });
    });
  });
  _autoMatches = matches;
  return matches;
}
function calcScore(a, b) {
  const w1 = new Set(a.toLowerCase().split(/\s+/).filter(w => w.length > 3));
  if (!w1.size) return 0;
  const hits = b.toLowerCase().split(/\s+/).filter(w => w.length > 3 && w1.has(w)).length;
  return Math.min(hits / w1.size, 1);
}
function getMatchForInsumo(id) {
  const m = _autoMatches.find(x => x.id_insumo === id && x.activo);
  if (!m) return null;
  const inv = DB.get('inventario').find(x => x.id === m.id_inventario);
  return inv ? { match: m, inventario: inv } : null;
}

/* ─── Navegación (CORREGIDA PARA 7 PESTAÑAS) ─── */
function showTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => { p.classList.remove('active'); p.classList.add('hidden'); });
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(tabId);
  if (panel) { panel.classList.add('active'); panel.classList.remove('hidden'); }
  
  // Mapa con las 8 pestañas exactas
  const map = { 
    tabInicio: 0,
    tabNecesidades: 1, 
    tabVenta: 2, 
    tabAcopio: 3, 
    tabInventario: 4, 
    tabVoluntarios: 5, 
    tabAlimentacion: 6, 
    tabTransporte: 7 
  };
  
  const tabs = document.querySelectorAll('.nav-tab');
  if (tabs[map[tabId]] !== undefined) tabs[map[tabId]].classList.add('active');
  renderAll();
}

/* ─── Modales ─── */
function showModal(id) { document.getElementById(id)?.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function hideModal(id) {
  document.getElementById(id)?.classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('pinError')?.classList.add('hidden');
  const pi = document.getElementById('pinInput'); if (pi) pi.value = '';
}

/* ─── Bienvenida ─── */
function chooseRole(role) {
  dismissWelcome();
  if (role === 'necesito') { showTab('tabNecesidades'); }
  else if (role === 'local') { showTab('tabVenta'); }
  else { openDonorPanel(); }
}
function dismissWelcome() {
  const w = document.getElementById('welcomeScreen');
  if (!w) return;
  w.style.opacity = '0';
  w.style.pointerEvents = 'none';
  document.body.style.overflow = '';
  setTimeout(() => { w.style.display = 'none'; w.style.opacity = ''; w.style.pointerEvents = ''; }, 300);
}

function showWelcome() {
  const w = document.getElementById('welcomeScreen');
  if (!w) return;
  w.style.display = 'flex';
  // forzar reflow para que la transición funcione
  w.getBoundingClientRect();
  w.style.opacity = '1';
  document.body.style.overflow = 'hidden';
}
function openDonorPanel()  { showModal('donorPanel'); }
function closeDonorPanel() { hideModal('donorPanel'); }
function goToHome() {
  showWelcome();
}


/* ─── MÓDULO B: Geolocalización ─── */
function useGeoLocation() {
  if (!navigator.geolocation) { showToast(t('toast_geo_error')); return; }
  navigator.geolocation.getCurrentPosition(
    pos => { showToast(t('toast_geo_ok')); document.getElementById('filtroCiudad').value = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`; applyFilters(); },
    () => showToast(t('toast_geo_error')), { enableHighAccuracy: true, timeout: 8000 }
  );
}
function getGeoForForm(prefix) {
  if (!navigator.geolocation) { showToast(t('toast_geo_error')); return; }
  const st = document.getElementById(prefix + '_geo_status');
  if (st) st.textContent = '…buscando…';
  navigator.geolocation.getCurrentPosition(
    pos => {
      const latEl = document.getElementById(prefix + '_lat');
      const lngEl = document.getElementById(prefix + '_lng');
      if(latEl) latEl.value = pos.coords.latitude;
      if(lngEl) lngEl.value = pos.coords.longitude;
      if (st) st.textContent = `✓ ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
    },
    () => { if (st) st.textContent = t('toast_geo_error'); },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

/* ─── MÓDULO A: Filtros ─── */
let filtros = { ciudad: '', categoria: '' };
function applyFilters() {
  filtros.ciudad    = document.getElementById('filtroCiudad')?.value.trim().toLowerCase() || '';
  filtros.categoria = document.getElementById('filtroCategoria')?.value || '';
  if (filtros.ciudad) {
    const matches = runAutoMatch(filtros.ciudad);
    const banner  = document.getElementById('autoMatchBanner');
    if (banner) {
      if (matches.length > 0) {
        const inv = DB.get('inventario').find(x => x.id === matches[0].id_inventario);
        if (inv) { banner.textContent = `${t('match_label')} ${inv.nombre_local} tiene ${inv.cantidad_disponible || ''} ${inv.unidad || ''} disponibles`; banner.classList.remove('hidden'); }
      } else { banner.classList.add('hidden'); }
    }
  }
  renderAll();
}
function filterItems(items) {
  return items.filter(item => {
    const okC = !filtros.ciudad    || (item.ciudad || '').toLowerCase().includes(filtros.ciudad);
    const okK = !filtros.categoria || item.categoria === filtros.categoria;
    return okC && okK;
  });
}

/* ─── MÓDULO C: Confirmación de estado + Notificación al publicador ─── */
let pendingConfirmAction = null;
function requestConfirmacion(msg, action) {
  pendingConfirmAction = action;
  const pm = document.getElementById('confirmarMensaje'); if (pm) pm.textContent = msg;
  document.getElementById('confirmarError')?.classList.add('hidden');
  const nombreEl = document.getElementById('confirmarNombre'); if (nombreEl) nombreEl.value = '';
  const telEl = document.getElementById('confirmarTelefono'); if (telEl) telEl.value = '';
  showModal('modalConfirmarAccion');
}
async function confirmAccion() {
  const nombre = document.getElementById('confirmarNombre')?.value.trim();
  const telefono = document.getElementById('confirmarTelefono')?.value.trim();
  if (!nombre || !telefono) { document.getElementById('confirmarError')?.classList.remove('hidden'); return; }
  if (pendingConfirmAction) {
    const ok = await pendingConfirmAction(nombre, telefono);
    if (ok) { hideModal('modalConfirmarAccion'); showToast(t('toast_pin_ok')); renderAll(); }
    else { document.getElementById('confirmarError')?.classList.remove('hidden'); }
  }
}
function notificarPublicador(ins, accion, nombreQuien, telQuien) {
  if (!ins.telefono_contacto) return;
  const telLimpio = ins.telefono_contacto.replace(/\D/g, '');
  const accionTexto = accion === 'comprado'
    ? `🟡 *${nombreQuien}* marcó tu necesidad como *comprada*:\n"${ins.descripcion}"\n\nPuedes contactarlo aquí: ${telQuien}`
    : `🟢 *${nombreQuien}* marcó tu necesidad como *recibida*:\n"${ins.descripcion}"\n\n¡Gracias por confiar en Entre Amigos por Venezuela! 💛`;
  const msg = encodeURIComponent(accionTexto);
  window.open(`https://wa.me/${telLimpio}?text=${msg}`, '_blank');
}
async function marcarComprado(insumoId) {
  const ins = DB.get('insumos').find(x => x.id === insumoId); if (!ins) return;
  requestConfirmacion(`Confirma que compraste "${ins.descripcion}".`, async (nombre, telefono) => {
    DB.update('insumos', insumoId, { estado_ayuda: 'comprado' });
    notificarPublicador(ins, 'comprado', nombre, telefono);
    // Preguntar si necesita transporte (modal propio, no window.confirm — no funciona en navegadores móviles)
    setTimeout(() => preguntarSiNecesitaTransporte(insumoId), 400);
    return true;
  });
}
let _pendingTransportInsumoId = null;
function preguntarSiNecesitaTransporte(insumoId) {
  const ins = DB.get('insumos').find(x => x.id === insumoId); if (!ins) return;
  _pendingTransportInsumoId = insumoId;
  const msg = document.getElementById('preguntaMensaje');
  if (msg) msg.textContent = `¿"${ins.descripcion}" necesita transporte para ser entregado?`;
  showModal('modalPreguntaSiNo');
}
function responderPreguntaSiNo(necesita) {
  hideModal('modalPreguntaSiNo');
  const insumoId = _pendingTransportInsumoId;
  _pendingTransportInsumoId = null;
  if (!necesita || !insumoId) return;
  const ins = DB.get('insumos').find(x => x.id === insumoId); if (!ins) return;
  DB.add('transporte', {
    id: uuid(),
    id_insumo: insumoId,
    descripcion: ins.descripcion,
    ciudad: ins.ciudad,
    telefono_contacto: ins.telefono_contacto || '',
    lat: ins.lat || null,
    lng: ins.lng || null,
    estado_traslado: 'pendiente',
    creado_en: now()
  });
  DB.update('insumos', insumoId, { estado_ayuda: 'en_transito', necesita_transporte: true });
  showToast('🚗 Publicado en Transporte — esperando que alguien lo lleve');
  renderAll();
}
async function marcarRecibido(insumoId) {
  const ins = DB.get('insumos').find(x => x.id === insumoId); if (!ins) return;
  requestConfirmacion(`Confirma que se recibió "${ins.descripcion}".`, async (nombre, telefono) => {
    DB.update('insumos', insumoId, { estado_ayuda: 'recibido' });
    if (ins.id_transporte) DB.update('transporte', ins.id_transporte, { estado_traslado: 'entregado' });
    notificarPublicador(ins, 'recibido', nombre, telefono);
    return true;
  });
}

/* ─── MÓDULO G: Transporte ─── */
function marcarTransporteEntregado(transporteId) {
  const trans = DB.get('transporte').find(x => x.id === transporteId); if (!trans) return;
  requestConfirmacion(`Confirma que "${trans.descripcion}" ya fue recogido / entregado.`, async (nombre, telefono) => {
    DB.update('transporte', transporteId, { estado_traslado: 'entregado' });
    if (trans.id_insumo) DB.update('insumos', trans.id_insumo, { estado_ayuda: 'recibido' });
    showToast('✅ Marcado como entregado');
    return true;
  });
}

/* ─── MÓDULO E: Alimentación ─── */
function abrirModalVoluntarioComida(eventoId) {
  document.getElementById('vol_id_alimentacion').value = eventoId;
  showModal('modalVoluntarioComida');
}
function submitVoluntarioComida(e) {
  e.preventDefault();
  const nombre  = document.getElementById('vol_nombre').value.trim();
  const cedula  = document.getElementById('vol_cedula').value.trim();
  const queLleva= document.getElementById('vol_que_lleva').value.trim();
  const tel     = document.getElementById('vol_telefono').value.trim();
  const evId    = document.getElementById('vol_id_alimentacion').value;
  if (!nombre || !cedula || !queLleva) { showToast(t('toast_error')); return; }
  DB.add('voluntarios_comida', { id: uuid(), id_alimentacion: evId, nombre_voluntario: nombre, cedula_voluntario: cedula, que_lleva: queLleva, telefono: tel, confirmado: false, creado_en: now() });
  hideModal('modalVoluntarioComida');
  document.getElementById('formVoluntarioComida').reset();
  showToast(t('toast_guardado'));
  renderAll();
}
function submitEvento(e) {
  e.preventDefault();
  const nombre  = document.getElementById('ev_nombre').value.trim();
  const tipo    = document.getElementById('ev_tipo').value;
  const turno   = document.getElementById('ev_turno').value;
  const fecha   = document.getElementById('ev_fecha').value;
  const ciudad  = document.getElementById('ev_ciudad').value.trim();
  const personas= parseInt(document.getElementById('ev_personas').value) || 0;
  const lat     = parseFloat(document.getElementById('ev_lat').value) || 0;
  const lng     = parseFloat(document.getElementById('ev_lng').value) || 0;
  if (!nombre || !tipo || !turno || !fecha || !ciudad) { showToast(t('toast_error')); return; }
  DB.add('alimentacion', { id: uuid(), nombre_lugar: nombre, tipo_lugar: tipo, ciudad, estado_vzla: ciudad, lat, lng, turno, fecha, personas_estimadas: personas, creado_en: now() });
  hideModal('modalNuevoEvento');
  document.getElementById('formEvento').reset();
  document.getElementById('ev_geo_status').textContent = '';
  showToast(t('toast_guardado'));
  renderAll();
}

/* ─── MÓDULO I: Locales y donantes ─── */
function submitInventario(e) {
  e.preventDefault();
  const cat      = document.getElementById('inv_categoria').value;
  const desc     = document.getElementById('inv_descripcion').value.trim();
  const cantidad = parseInt(document.getElementById('inv_cantidad').value) || 0;
  const unidad   = document.getElementById('inv_unidad').value.trim();
  const precio   = parseFloat(document.getElementById('inv_precio').value) || null;
  const nombre   = document.getElementById('inv_nombre_local').value.trim();
  const ciudad   = document.getElementById('inv_ciudad').value.trim();
  const dir      = document.getElementById('inv_direccion').value.trim();
  const horario  = document.getElementById('inv_horario').value.trim();
  const tel      = document.getElementById('inv_telefono').value.trim();
  const productos= document.getElementById('inv_productos').value.trim();
  const lat      = parseFloat(document.getElementById('inv_lat').value) || null;
  const lng      = parseFloat(document.getElementById('inv_lng').value) || null;
  if (!cat || !desc || !nombre || !ciudad) { showToast(t('toast_error')); return; }
  DB.add('inventario', { id: uuid(), categoria: cat, descripcion: desc, cantidad_disponible: cantidad, unidad, precio, nombre_local: nombre, ciudad, estado_vzla: ciudad, direccion: dir, horario, telefono_contacto: tel, productos_lista: productos, lat, lng, activo: true, creado_en: now() });
  hideModal('modalNuevoInventario');
  document.getElementById('formInventario').reset();
  document.getElementById('inv_geo_status').textContent = '';
  showToast(t('toast_guardado'));
  renderAll();
}

/* ─── NUEVAS FUNCIONES PARA VENTA Y ACOPIO ─── */
function submitVenta(e) {
  e.preventDefault();
  const nombre     = document.getElementById('vta_nombre').value.trim();
  const productos  = document.getElementById('vta_productos').value.trim();
  const ubicacion  = document.getElementById('vta_ubicacion').value.trim();
  const telefono   = document.getElementById('vta_telefono').value.trim();
  const lat        = parseFloat(document.getElementById('vta_lat')?.value) || null;
  const lng        = parseFloat(document.getElementById('vta_lng')?.value) || null;
  if (!nombre || !productos || !ubicacion || !telefono) { showToast(t('toast_error')); return; }
  DB.add('ventas', { id: uuid(), nombre_local: nombre, productos, ubicacion, telefono, lat, lng, activo: true, creado_en: now() });
  hideModal('modalNuevaVenta');
  document.getElementById('formVenta').reset();
  const st = document.getElementById('vta_geo_status'); if(st) st.textContent = '';
  showToast(t('toast_guardado'));
  renderAll();
}

function submitAcopio(e) {
  e.preventDefault();
  const tipo      = document.getElementById('acp_tipo').value;
  const articulos = document.getElementById('acp_articulos').value.trim();
  if (!tipo || !articulos) { showToast(t('toast_error')); return; }
  const data = { id: uuid(), tipo, articulos, activo: true, creado_en: now() };
  if (tipo === 'centro') {
    data.origen     = document.getElementById('acp_origen').value.trim();
    data.direccion  = document.getElementById('acp_direccion').value.trim();
    if (!data.origen || !data.direccion) { showToast(t('toast_error')); return; }
  } else if (tipo === 'persona') {
    data.cedula     = document.getElementById('acp_cedula').value.trim();
    data.telefono   = document.getElementById('acp_telefono').value.trim();
    data.ciudad     = document.getElementById('acp_ciudad').value.trim();
    if (!data.cedula || !data.telefono || !data.ciudad) { showToast(t('toast_error')); return; }
  }
  DB.add('acopio', data);
  hideModal('modalNuevoAcopio');
  document.getElementById('formAcopio').reset();
  document.getElementById('acp_centro_fields').style.display = 'none';
  document.getElementById('acp_persona_fields').style.display = 'none';
  showToast(t('toast_guardado'));
  renderAll();
}


/* ─── MÓDULO J: Voluntarios para centros ─── */
function submitSolicitudVoluntarios(e) {
  e.preventDefault();
  const nombre   = document.getElementById('sv_nombre_centro').value.trim();
  const ciudad   = document.getElementById('sv_ciudad').value.trim();
  const contacto = document.getElementById('sv_contacto').value.trim();
  const cantidad = parseInt(document.getElementById('sv_cantidad').value) || 1;
  const tareas   = document.getElementById('sv_tareas').value.trim();
  const horario  = document.getElementById('sv_horario').value.trim();
  const tel      = document.getElementById('sv_telefono').value.trim();
  if (!nombre || !ciudad || !tareas) { showToast(t('toast_error')); return; }
  DB.add('solicitudes_voluntarios', { id: uuid(), nombre_centro: nombre, ciudad, contacto, cantidad_voluntarios: cantidad, tareas, horario, telefono: tel, activo: true, creado_en: now() });
  hideModal('modalPedirVoluntarios');
  document.getElementById('formSolicitudVoluntarios').reset();
  showToast(t('toast_guardado'));
  renderAll();
}

function abrirOfrecerseVoluntario(solicitudId) {
  document.getElementById('ov_id_solicitud').value = solicitudId;
  showModal('modalOfrecerseVoluntario');
}
function submitOfrecerseVoluntario(e) {
  e.preventDefault();
  const nombre  = document.getElementById('ov_nombre').value.trim();
  const cedula  = document.getElementById('ov_cedula').value.trim();
  const tel     = document.getElementById('ov_telefono').value.trim();
  const nota    = document.getElementById('ov_nota').value.trim();
  const solId   = document.getElementById('ov_id_solicitud').value;
  if (!nombre || !cedula || !tel) { showToast(t('toast_error')); return; }
  DB.add('respuestas_voluntarios', { id: uuid(), id_solicitud: solId, nombre, cedula, telefono: tel, nota, creado_en: now() });
  hideModal('modalOfrecerseVoluntario');
  document.getElementById('formOfrecerseVoluntario').reset();
  showToast('✅ ¡Gracias! El centro recibirá tus datos');
  renderAll();
}

/* ─── Formulario necesidad ─── */
async function submitNecesidad(e) {
  e.preventDefault();
  const cat   = document.getElementById('nec_categoria').value;
  const desc  = document.getElementById('nec_descripcion').value.trim();
  const cant  = parseInt(document.getElementById('nec_cantidad').value);
  const unid  = document.getElementById('nec_unidad').value.trim();
  const ciudad= document.getElementById('nec_ciudad').value.trim();
  const hosp  = document.getElementById('nec_hospital').value.trim();
  const tel   = document.getElementById('nec_telefono').value.trim();
  const lat   = parseFloat(document.getElementById('nec_lat').value) || null;
  const lng   = parseFloat(document.getElementById('nec_lng').value) || null;
  const tSang = document.getElementById('nec_tipo_sangre')?.value || null;
  if (!cat || !desc || !cant || !ciudad || !tel) { showToast(t('toast_error')); return; }
  DB.add('insumos', { id: uuid(), categoria: cat, descripcion: desc, cantidad: cant, unidad: unid, ciudad, estado_vzla: ciudad, hospital_centro: hosp, telefono_contacto: tel, lat, lng, tipo_sangre: tSang, estado_ayuda: 'necesitado', foto_factura_url: null, id_transporte: null, idioma_publicacion: LANG, creado_en: now(), actualizado_en: now() });
  hideModal('modalNuevaNecesidad');
  document.getElementById('formNecesidad').reset();
  document.getElementById('nec_geo_status').textContent = '';
  showToast(t('toast_guardado'));
  applyFilters();
}

/* ─── Helpers visuales ─── */
const ICONS = { sangre:'🩸', insumos_medicos:'🏥', rescate:'🦺', refugio_ropa:'⛺', alimentos_agua:'🥫', default:'📦' };
const TURNOS = { desayuno:'🌅', almuerzo:'☀️', cena:'🌙' };
function mapsLink(lat, lng, query) {
  if (lat && lng) return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || '')}`;
}
function estadoClass(e) { return `estado-badge estado-${e}`; }
function estadoLabel(e) {
  return { necesitado: t('estado_necesitado'), comprado: t('estado_comprado'), en_transito: t('estado_en_transito'), recibido: t('estado_recibido') }[e] || e;
}
function emptyState(el, msg) {
  if (!el) return;
  el.innerHTML = msg.replace(/\n/g, '<br>');
  el.classList.remove('hidden');
}

/* ─── Render: Necesidades ─── */
function renderNecesidades() {
  const lista = document.getElementById('listaNecesidades');
  const empty = document.getElementById('emptyNecesidades');
  if (!lista) return;
  const items = filterItems(DB.get('insumos'));
  lista.innerHTML = '';
  if (!items.length) { emptyState(empty, filtros.ciudad || filtros.categoria ? 'Sin resultados en esa zona o categoría.\nPrueba con otra ciudad o quita el filtro.' : t('empty_necesidades')); return; }
  empty?.classList.add('hidden');
  items.forEach(item => {
    const matchData  = getMatchForInsumo(item.id);
    const card       = document.createElement('article');
    card.className   = 'card';
    card.setAttribute('role', 'listitem');
    const matchHtml  = matchData && item.estado_ayuda === 'necesitado'
      ? `<div class="match-badge">💡 ${matchData.inventario.nombre_local} tiene ${matchData.inventario.cantidad_disponible || ''} ${matchData.inventario.unidad || ''} disponibles</div>` : '';
    let actHtml = '';
    if (item.estado_ayuda === 'necesitado') actHtml = `<div class="card-actions"><button class="btn-card btn-card--primary" onclick="marcarComprado('${item.id}')">${t('btn_marcar_comprado')}</button><a href="${mapsLink(item.lat,item.lng,item.ciudad)}" target="_blank" rel="noopener" class="btn-card btn-card--maps">${t('btn_maps')}</a></div>`;
    else if (item.estado_ayuda === 'comprado') actHtml = `<div class="card-actions"><button class="btn-card btn-card--primary" onclick="marcarRecibido('${item.id}')">${t('btn_marcar_recibido')}</button><a href="${mapsLink(item.lat,item.lng,item.ciudad)}" target="_blank" rel="noopener" class="btn-card btn-card--maps">${t('btn_maps')}</a></div>`;
    else if (item.estado_ayuda === 'en_transito') actHtml = `<div class="card-actions"><span class="card-time">🚗 ${t('estado_necesita_transporte') || 'Esperando transporte'}</span></div>`;
    const sangreHtml = item.tipo_sangre ? ` — <strong style="color:var(--rojo)">Tipo ${item.tipo_sangre}</strong>` : '';
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${ICONS[item.categoria]||ICONS.default}</span>
        <div class="card-meta">
          <div class="card-titulo">${item.descripcion.slice(0,60)}${item.descripcion.length>60?'…':''}</div>
          <div class="card-subtitulo">${item.cantidad} ${item.unidad||'unidades'}${sangreHtml}</div>
        </div>
        <span class="${estadoClass(item.estado_ayuda)}">${estadoLabel(item.estado_ayuda)}</span>
      </div>
      <div class="card-body">
        ${matchHtml}
        <p class="card-desc">${item.descripcion}</p>
        <div class="card-location">📍 ${item.ciudad}${item.hospital_centro?' · '+item.hospital_centro:''}</div>
        ${item.telefono_contacto ? `<div class="card-contact">📞 <a href="https://wa.me/${item.telefono_contacto.replace(/\D/g,'')}" target="_blank" rel="noopener">${item.telefono_contacto}</a></div>` : ''}
        <div class="card-time">🕐 ${timeAgo(item.creado_en)}</div>
        ${item.foto_factura_url?`<img src="${item.foto_factura_url}" alt="Factura" class="factura-thumb" loading="lazy">`:''}
      </div>
      ${actHtml}`;
    lista.appendChild(card);
  });
}

/* ─── Render: Venta (NUEVO) ─── */
function renderVenta() {
  const lista = document.getElementById('listaVenta');
  const empty = document.getElementById('emptyVenta');
  if (!lista) return;
  const items = DB.get('ventas').filter(x => x.activo !== false);
  lista.innerHTML = '';
  if (!items.length) { emptyState(empty, t('empty_venta')); return; }
  empty?.classList.add('hidden');
  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">🏷️</span>
        <div class="card-meta">
          <div class="card-titulo">${item.nombre_local}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${(item.productos || '').replace(/\n/g,'<br>')}</p>
        <div class="card-location">📍 ${item.ubicacion || ''}</div>
        <div class="card-time">🕐 ${timeAgo(item.creado_en)}</div>
      </div>
      <div class="card-actions">
        <a href="${mapsLink(item.lat, item.lng, item.ubicacion)}" target="_blank" rel="noopener" class="btn-card btn-card--maps">${t('btn_maps')}</a>
        ${item.telefono ? `<a href="https://wa.me/${item.telefono.replace(/\D/g,'')}" target="_blank" rel="noopener" class="btn-card btn-card--wapp">${t('btn_whatsapp')}</a>` : ''}
      </div>`;
    lista.appendChild(card);
  });
}

/* ─── Render: Acopio (NUEVO) ─── */
function renderAcopio() {
  const lista = document.getElementById('listaAcopio');
  const empty = document.getElementById('emptyAcopio');
  if (!lista) return;
  const items = DB.get('acopio').filter(x => x.activo !== false);
  lista.innerHTML = '';
  if (!items.length) { emptyState(empty, t('empty_acopio')); return; }
  empty?.classList.add('hidden');
  items.forEach(item => {
    const esCentro = item.tipo === 'centro';
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">📦</span>
        <div class="card-meta">
          <div class="card-titulo">${esCentro ? (item.origen || 'Centro de Acopio') : 'Persona Individual'}</div>
          <div class="card-subtitulo">${esCentro ? t('opt_centro') : t('opt_persona')}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${item.articulos}</p>
        ${esCentro ? `<div class="card-location">📍 ${item.direccion || ''}</div>` : `<div class="card-location">📍 ${item.ciudad || ''}</div>`}
        <div class="card-time">🕐 ${timeAgo(item.creado_en)}</div>
      </div>
      <div class="card-actions">
        ${!esCentro && item.telefono ? `<a href="https://wa.me/${item.telefono.replace(/\D/g,'')}" target="_blank" rel="noopener" class="btn-card btn-card--wapp">${t('btn_whatsapp')}</a>` : ''}
      </div>`;
    lista.appendChild(card);
  });
}

/* ─── Render: Inventario / Locales ─── */
function renderInventario() {
  const lista = document.getElementById('listaInventario');
  const empty = document.getElementById('emptyInventario');
  if (!lista) return;
  const items = filterItems(DB.get('inventario').filter(x => x.activo));
  lista.innerHTML = '';
  if (!items.length) { emptyState(empty, filtros.ciudad ? 'Nadie ha registrado insumos en esa zona aún.' : t('empty_inventario')); return; }
  empty?.classList.add('hidden');
  items.forEach(item => {
    const card     = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    const esDon    = !item.precio || item.precio === 0;
    const precioTag= esDon
      ? `<span class="precio-tag precio-gratis">🎁 Donación gratuita</span>`
      : `<span class="precio-tag precio-venta">💰 Bs. ${item.precio}${item.unidad?' / '+item.unidad:''}</span>`;
    const waText   = encodeURIComponent(`Hola ${item.nombre_local}, vi que tienen "${item.descripcion}" en Entre Amigos por Venezuela. ¿Pueden darme más información?`);
    const waLink   = item.telefono_contacto ? `https://wa.me/${item.telefono_contacto.replace(/\D/g,'')}?text=${waText}` : null;
    const chipsHtml= item.productos_lista
      ? `<div class="productos-list">${item.productos_lista.split('\n').filter(Boolean).map(p=>`<span class="producto-chip">${p.trim()}</span>`).join('')}</div>` : '';
    card.innerHTML = `
      <div class="local-header">
        <div class="local-avatar">${item.nombre_local.charAt(0).toUpperCase()}</div>
        <div class="card-meta">
          <div class="card-titulo">${item.nombre_local}</div>
          <div class="card-subtitulo">${ICONS[item.categoria]||'📦'} ${item.categoria.replace(/_/g,' ')}</div>
        </div>
        ${precioTag}
      </div>
      <div class="card-body">
        <p class="card-desc">${item.descripcion}</p>
        ${chipsHtml}
        <div class="card-location">📍 ${item.direccion?item.direccion+', ':''}${item.ciudad}</div>
        ${item.horario?`<div class="card-location">🕐 ${item.horario}</div>`:''}
        ${item.telefono_contacto?`<div class="card-location">📞 ${item.telefono_contacto}</div>`:''}
        ${item.cantidad_disponible?`<div class="card-location">📦 ${item.cantidad_disponible} ${item.unidad||'unidades'} disponibles</div>`:''}
      </div>
      <div class="card-actions">
        ${waLink?`<a href="${waLink}" target="_blank" rel="noopener" class="btn-card btn-card--wapp">💬 WhatsApp</a>`:''}
        <a href="${mapsLink(item.lat,item.lng,(item.direccion?item.direccion+', ':'')+item.ciudad)}" target="_blank" rel="noopener" class="btn-card btn-card--maps">📍 Ver en mapa</a>
      </div>`;
    lista.appendChild(card);
  });
}

/* ─── Render: Voluntarios (centros) ─── */
function renderVoluntarios() {
  const lista = document.getElementById('listaVoluntarios');
  const empty = document.getElementById('emptyVoluntarios');
  if (!lista) return;
  const solicitudes = filterItems(DB.get('solicitudes_voluntarios').filter(x => x.activo));
  lista.innerHTML = '';
  if (!solicitudes.length) { emptyState(empty, filtros.ciudad ? 'No hay solicitudes de voluntarios en esa zona.' : t('empty_voluntarios')); return; }
  empty?.classList.add('hidden');
  solicitudes.forEach(sol => {
    const respuestas = DB.find('respuestas_voluntarios', x => x.id_solicitud === sol.id);
    const card       = document.createElement('article');
    card.className   = 'card';
    card.setAttribute('role', 'listitem');
    const waLink     = sol.telefono ? `https://wa.me/${sol.telefono.replace(/\D/g,'')}?text=${encodeURIComponent(`Hola ${sol.nombre_centro}, quiero ofrecerme como voluntario para: ${sol.tareas}`)}` : null;
    card.innerHTML = `
      <div class="local-header">
        <div class="local-avatar vol-avatar">🤝</div>
        <div class="card-meta">
          <div class="card-titulo">${sol.nombre_centro}</div>
          <div class="card-subtitulo">📍 ${sol.ciudad}</div>
        </div>
        <span class="precio-tag precio-venta" style="background:#e8f0fe;color:#1a4a9a;border-color:#b8d0f8;">🙋 ${sol.cantidad_voluntarios} voluntario${sol.cantidad_voluntarios!==1?'s':''}</span>
      </div>
      <div class="card-body">
        <div class="vol-tareas-label">Tareas necesarias</div>
        <p class="card-desc">${sol.tareas}</p>
        ${sol.horario?`<div class="card-location">🕐 ${sol.horario}</div>`:''}
        ${sol.contacto?`<div class="card-location">👤 Contacto: ${sol.contacto}</div>`:''}
        <div class="card-location" style="color:var(--verde);font-weight:600;">✋ ${respuestas.length} voluntario${respuestas.length!==1?'s':''} ya se ofrecieron</div>
      </div>
      <div class="card-actions">
        <button class="btn-card btn-card--primary" onclick="abrirOfrecerseVoluntario('${sol.id}')">🙋 Ofrecerme</button>
        ${waLink?`<a href="${waLink}" target="_blank" rel="noopener" class="btn-card btn-card--wapp">💬 WhatsApp</a>`:''}
      </div>`;
    lista.appendChild(card);
  });
}

/* ─── Render: Alimentación ─── */
function renderAlimentacion() {
  const lista = document.getElementById('listaAlimentacion');
  const empty = document.getElementById('emptyAlimentacion');
  if (!lista) return;
  const eventos = filterItems(DB.get('alimentacion'));
  lista.innerHTML = '';
  if (!eventos.length) { emptyState(empty, filtros.ciudad ? 'Sin eventos en esa zona aún.' : t('empty_alimentacion')); return; }
  empty?.classList.add('hidden');
  eventos.forEach(ev => {
    const vols   = DB.find('voluntarios_comida', x => x.id_alimentacion === ev.id);
    const card   = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    const volRows = vols.map(v => `<div class="vol-item"><span class="vol-name">${v.nombre_voluntario}</span><span class="vol-what">${v.que_lleva}</span></div>`).join('');
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">${TURNOS[ev.turno]||'🍽️'}</span>
        <div class="card-meta">
          <div class="card-titulo">${ev.nombre_lugar}</div>
          <div class="card-subtitulo">${ev.turno} · ${ev.fecha} · ~${ev.personas_estimadas||'?'} personas</div>
        </div>
      </div>
      <div class="card-body"><div class="card-location">📍 ${ev.ciudad}</div></div>
      ${vols.length?`<div class="vol-list"><div class="vol-list-title">Voluntarios (${vols.length})</div>${volRows}</div>`:''}
      <div class="card-actions">
        <button class="btn-card btn-card--primary" onclick="abrirModalVoluntarioComida('${ev.id}')">🙋 Anotarme</button>
        <a href="${mapsLink(ev.lat,ev.lng,ev.ciudad)}" target="_blank" rel="noopener" class="btn-card btn-card--maps">${t('btn_maps')}</a>
      </div>`;
    lista.appendChild(card);
  });
}

/* ─── Render: Transporte ─── */
function renderTransporte() {
  const lista = document.getElementById('listaTransporte');
  const empty = document.getElementById('emptyTransporte');
  if (!lista) return;
  const activos  = DB.get('transporte').filter(x => x.estado_traslado !== 'entregado');
  const filtered = activos.filter(x => !filtros.ciudad || (x.ciudad || '').toLowerCase().includes(filtros.ciudad));
  lista.innerHTML = '';
  if (!filtered.length) { emptyState(empty, t('empty_transporte')); return; }
  empty?.classList.add('hidden');
  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <div class="card-header">
        <span class="card-icon">🚗</span>
        <div class="card-meta">
          <div class="card-titulo">${(item.descripcion || '').slice(0,60)}${(item.descripcion||'').length>60?'…':''}</div>
          <div class="card-subtitulo">${t('estado_necesita_transporte') || 'Esperando transporte'}</div>
        </div>
        <span class="estado-badge estado-en_transito">🟠 ${t('estado_en_transito')}</span>
      </div>
      <div class="card-body">
        <div class="card-location">📍 ${item.ciudad || ''}</div>
        <div class="card-time">🕐 ${timeAgo(item.creado_en)}</div>
      </div>
      <div class="card-actions">
        ${item.telefono_contacto ? `<a href="https://wa.me/${item.telefono_contacto.replace(/\D/g,'')}" target="_blank" rel="noopener" class="btn-card btn-card--wapp">${t('btn_whatsapp')}</a>` : ''}
        <button class="btn-card btn-card--primary" onclick="marcarTransporteEntregado('${item.id}')">✅ Ya fue recogido / entregado</button>
      </div>`;
    lista.appendChild(card);
  });
}

function renderAll() {
  updateInicioStats();
  renderDonaciones();
  renderNecesidades();
  renderVenta();
  renderAcopio();
  renderInventario();
  renderVoluntarios();
  renderAlimentacion();
  renderTransporte();
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  const catSel = document.getElementById('nec_categoria');
  if (catSel) catSel.addEventListener('change', () => {
    const g = document.getElementById('grupoTipoSangre');
    if (g) g.style.display = catSel.value === 'sangre' ? 'block' : 'none';
    const ts = document.getElementById('nec_tipo_sangre');
    if (ts) ts.required = catSel.value === 'sangre';
  });
  document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) hideModal(o.id); });
  });

  initFirestoreSync();
  onDbReady(() => {
    applyFilters();
    setLang('es');
    renderAll();
  });

  // Re-render al abrir modal de transparencia
  document.getElementById('modalTransparencia')?.addEventListener('click', () => {});
});
/* ══════════════════════════════════════════════
   MÓDULO K: Inspección de Viviendas y Edificaciones
   MÓDULO L: Transparencia / Donaciones publicadas
   MÓDULO M: Historial de navegación (botón atrás)
══════════════════════════════════════════════ */

/* ─── MÓDULO M: Historial (navegación hacia atrás) ───── */
const NavHistory = {
  stack: [],
  push(tabId) {
    // Evitar duplicados consecutivos
    if (this.stack[this.stack.length - 1] === tabId) return;
    this.stack.push(tabId);
    this.updateBackBtn();
  },
  pop() {
    if (this.stack.length <= 1) return null;
    this.stack.pop();
    return this.stack[this.stack.length - 1];
  },
  updateBackBtn() {
    const btn = document.getElementById('btnBack');
    if (!btn) return;
    btn.style.display = this.stack.length > 1 ? 'flex' : 'none';
  }
};

function goBack() {
  const prev = NavHistory.pop();
  if (prev) showTabInternal(prev);
}

// Versión interna de showTab que no pushea al historial
function showTabInternal(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => { p.classList.remove('active'); p.classList.add('hidden'); });
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(tabId);
  if (panel) { panel.classList.add('active'); panel.classList.remove('hidden'); }
  const map = { tabInicio:0, tabNecesidades:1, tabVenta:2, tabAcopio:3, tabInventario:4, tabVoluntarios:5, tabAlimentacion:6, tabTransporte:7 };
  const tabs = document.querySelectorAll('.nav-tab');
  if (tabs[map[tabId]] !== undefined) tabs[map[tabId]].classList.add('active');
  renderAll();
}

// Override showTab para integrar historial
const _originalShowTab = showTab;
window.showTab = function(tabId) {
  NavHistory.push(tabId);
  showTabInternal(tabId);
};

/* ─── MÓDULO K: Inspección de edificaciones ──────────── */

function submitInspeccion(e) {
  e.preventDefault();

  const telefono  = document.getElementById('insp_telefono').value.trim();
  const edificio  = document.getElementById('insp_edificio').value.trim();
  const ubicacion = document.getElementById('insp_ubicacion').value.trim();
  const antes1967 = document.querySelector('input[name="insp_antes1967"]:checked')?.value;
  const danos     = document.getElementById('insp_danos')?.value.trim() || '';
  const planos    = document.querySelector('input[name="insp_planos"]:checked')?.value;
  const archivos  = document.getElementById('insp_fotos').files;

  if (!telefono || !edificio || !ubicacion || !antes1967 || !planos) {
    showToast('❌ Completa todos los campos obligatorios'); return;
  }
  if (archivos.length === 0) {
    showToast('❌ Las fotos son obligatorias'); return;
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
  const INSPECTOR_TEL = '17863018995';
  const telLimpio = telefono.replace(/\D/g, '');
  const numFotos = archivos.length;

  const msgInspector = encodeURIComponent(
    `🏗️ *Nueva solicitud de inspección*\n` +
    `*Entre Amigos por Venezuela*\n\n` +
    `📞 *WhatsApp:* ${telefono}\n\n` +
    `🏢 *Edificio:* ${edificio}\n` +
    `📍 *Dirección:* ${ubicacion}\n\n` +
    `🏗️ *Construido antes de 1967:* ${antes1967 === 'si' ? 'Sí' : 'No'}\n` +
    (danos ? `🔧 *Daños / reparaciones:* ${danos}\n` : '') +
    `📐 *Planos disponibles:* ${planos === 'si' ? 'Sí' : 'No'}\n\n` +
    `📸 *Fotos:* ${numFotos} foto${numFotos !== 1 ? 's' : ''} adjunta${numFotos !== 1 ? 's' : ''} (vigas y columnas)\n\n` +
    `📌 *Ver en Google Maps:*\n${mapsUrl}`
  );

  const msgSolicitante = encodeURIComponent(
    `✅ *Solicitud de inspección recibida*\n` +
    `*Entre Amigos por Venezuela* 🇻🇪\n\n` +
    `Recibimos tu solicitud correctamente.\n\n` +
    `🏢 *Edificio:* ${edificio}\n` +
    `📍 *Dirección:* ${ubicacion}\n\n` +
    `📌 *Ubicación en Google Maps:*\n${mapsUrl}\n\n` +
    `Nuestro equipo se pondrá en contacto contigo para coordinar la visita. ¡Gracias por confiar en nosotros! 💛`
  );

  window.open(`https://wa.me/${INSPECTOR_TEL}?text=${msgInspector}`, '_blank');
  window.open(`https://wa.me/${telLimpio}?text=${msgSolicitante}`, '_blank');

  const fotosPromises = Array.from(archivos).slice(0, 6).map(f => compressImage(f, 200));

  Promise.all(fotosPromises).then(fotos => {
    const id = uuid();
    DB.add('inspecciones', {
      id, telefono, edificio, ubicacion,
      antes1967, danos, planos, fotos,
      estado: 'pendiente', creado_en: now()
    });
    hideModal('modalInspeccion');
    document.getElementById('formInspeccion').reset();
    document.getElementById('insp_fotos_preview').innerHTML = '';
    showToast('✅ Solicitud enviada — revisa tu WhatsApp');
  }).catch(() => {
    showToast('❌ Error con las fotos, pero la solicitud fue registrada.');
  });
}


function previsualizarFotos() {
  const input   = document.getElementById('insp_fotos');
  const preview = document.getElementById('insp_fotos_preview');
  if (!preview) return;
  preview.innerHTML = '';
  Array.from(input.files).slice(0, 6).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.cssText = 'width:70px;height:70px;object-fit:cover;border-radius:8px;border:1px solid var(--gborde)';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

/* ─── MÓDULO L: Transparencia / Donaciones publicadas ── */

function submitDonacion(e) {
  e.preventDefault();
  const monto     = document.getElementById('don_monto').value.trim();
  const descripcion = document.getElementById('don_descripcion').value.trim();
  const donde     = document.getElementById('don_donde').value.trim();
  const fecha     = document.getElementById('don_fecha').value;

  if (!monto || !descripcion || !donde || !fecha) {
    showToast('❌ Completa todos los campos'); return;
  }

  const archivos = document.getElementById('don_media').files;
  const mediaPromises = Array.from(archivos).slice(0, 4).map(f => {
    return new Promise((res) => {
      const reader = new FileReader();
      reader.onload = e => res({ url: e.target.result, tipo: f.type.startsWith('video') ? 'video' : 'imagen' });
      reader.readAsDataURL(f);
    });
  });

  Promise.all(mediaPromises).then(media => {
    DB.add('donaciones_pub', {
      id: uuid(), monto, descripcion, donde, fecha, media, creado_en: now()
    });
    hideModal('modalPublicarDonacion');
    document.getElementById('formDonacion').reset();
    document.getElementById('don_media_preview').innerHTML = '';
    renderDonaciones();
    showToast('✅ Donación publicada');
  });
}

function previsualizarMedia() {
  const input   = document.getElementById('don_media');
  const preview = document.getElementById('don_media_preview');
  if (!preview) return;
  preview.innerHTML = '';
  Array.from(input.files).slice(0, 4).forEach(file => {
    if (file.type.startsWith('video')) {
      const v = document.createElement('video');
      v.src = URL.createObjectURL(file);
      v.style.cssText = 'width:80px;height:80px;object-fit:cover;border-radius:8px;border:1px solid var(--gborde)';
      v.muted = true;
      preview.appendChild(v);
    } else {
      const reader = new FileReader();
      reader.onload = ev => {
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.style.cssText = 'width:80px;height:80px;object-fit:cover;border-radius:8px;border:1px solid var(--gborde)';
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
}

function buildDonCard(item) {
  const card = document.createElement('div');
  card.className = 'don-card';
  const media = item.media || [];
  const mediaHtml = media.length ? `
    <div class="don-media-grid" style="grid-template-columns:repeat(${Math.min(media.length,2)},1fr)">
      ${media.map(m => m.tipo === 'video'
        ? `<video src="${m.url}" controls style="width:100%;border-radius:8px;aspect-ratio:1;object-fit:cover"></video>`
        : `<img src="${m.url}" style="width:100%;border-radius:8px;aspect-ratio:1;object-fit:cover" loading="lazy">`
      ).join('')}
    </div>` : '';
  card.innerHTML = `
    <div class="don-card-top">
      <span class="don-icon-big">💛</span>
      <div>
        <div class="don-monto">${item.monto}</div>
        <div class="don-fecha">📅 ${item.fecha}</div>
      </div>
    </div>
    <div class="don-card-body">
      <p class="don-desc">${item.descripcion}</p>
      <div class="don-donde">📍 ${item.donde}</div>
      ${mediaHtml}
    </div>`;
  return card;
}

function renderDonaciones() {
  const items = DB.get('donaciones_pub');
  const empty = `<p style="text-align:center;color:var(--gsub);padding:2rem;font-size:.85rem;line-height:1.6">${t('empty_donaciones')}</p>`;

  // Modal transparencia
  const lista = document.getElementById('listaDonaciones');
  if (lista) {
    lista.innerHTML = '';
    if (!items.length) { lista.innerHTML = empty; }
    else { items.forEach(i => lista.appendChild(buildDonCard(i))); }
  }

  // Página inicio
  const listaInicio = document.getElementById('listaDonacionesInicio');
  if (listaInicio) {
    listaInicio.innerHTML = '';
    if (!items.length) { listaInicio.innerHTML = empty; }
    else { items.slice(0, 5).forEach(i => listaInicio.appendChild(buildDonCard(i))); }
  }
}


function updateInicioStats() {
  const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  el('statDonaciones',   DB.get('donaciones_pub').length);
  el('statNecesidades',  DB.get('insumos').filter(x => x.estado_ayuda === 'recibido').length);
  el('statInspecciones', DB.get('inspecciones').length);
}

/* ─── Init extendido ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Preview fotos inspección
  const fotosInsp = document.getElementById('insp_fotos');
  if (fotosInsp) fotosInsp.addEventListener('change', previsualizarFotos);
  // Preview media donaciones
  const donMedia = document.getElementById('don_media');
  if (donMedia) donMedia.addEventListener('change', previsualizarMedia);
  // Historial navegación — botón atrás del sistema
  window.addEventListener('popstate', () => goBack());
  // Start on tabInicio
  NavHistory.push('tabInicio');
  showTabInternal('tabInicio');
});

// Renderizar donaciones al abrir el modal de transparencia
const _origShowModal = showModal;
window.showModal = function(id) {
  _origShowModal(id);
  if (id === 'modalTransparencia') renderDonaciones();
};
