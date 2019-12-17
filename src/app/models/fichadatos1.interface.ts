
  export interface FichaDatos1I {
    IDCG?: string;
    IDLOCAL?: string;
    IDENT?: string;
    DNI?: string;
    CODIGO?: string;
    // UBICACION
    A1DEPA ?: string;
    A2PROV ?: string;
    A3DISTRITO ?: string;
    B1TIPO_VIA ?: string;
    B2NOMBRE_VIA ?: string;
    B3DIRECCION ?: string;
    B10REFERENCIA ?: string;
    B11TELEFONO ?: string;
    B12CELL ?: string;
    // DATOS DE LA MADRE USUARIA
    C1NOMBRE ?: string;
    C2APELLIDOP ?: string;
    C3APELLIDOM ?: string;
    C4DNI ?: string;
    // DATOS DEl NIÑO(A)
    D1NOMBRE ?: string;
    D2APELLIDOP ?: string;
    D3APELLIDOM ?: string;
    D4DNI ?: string;
    // ENCARGADOS DE LA ENCUESTA
    E1NOMBRE_ENCUES ?: string;
    E1APELLIDO_ENCUES?: string;
    E1DNI_ENCUES?: string;
    E2NOMBRE_SUPER?: string;
    E2APELLIDO_SUPER?: string;
    E2DNI_SUPER?: string;

    // F ENTREVISTA Y SUPERVISION
    // ENCUESTADOR
    // PRIMERA 
    F1FECHA_PRIMERA_E?: string;
    F1HORA_DESDE_E?: string;
    F1HORA_HASTA_E?: string;
    F1RESULTADO_ENCUESTA_E?: string;
    // SUPERVISOR
    F1FECHA_PRIMERA_SUPER?: string;
    F1RESULTADO_ENCUESTA_SUPER?: string;

    //SEGUNDA 
    F2FECHA_PRIMERA_S?: string;
    F2HORA_DESDE_S?: string;
    F2HORA_HASTA_S?: string;
    F2RESULTADO_ENCUESTA_S?: string;
 // SUPERVISOR
    F2FECHA_PRIMERA_SUPER?: string;
    F2RESULTADO_ENCUESTA_SUPER?: string;

    
    // RESULTADO FINAL DE LA ENCUESTA
    G1FECHA?: string;
    G2RESULTADO?: string;
    // DOCUMENTACIÓN REVISADA
    H1DNI_NINO?: string;
    H2CARNET_CONTROLES_CRED?: string;
    H3TRAJETA_RESULTADO?: string;
    // COMENTARIOS U OBSERVACIONES DEL ENCUESTADOR
    OBSERVACIONES?: string;

  }
