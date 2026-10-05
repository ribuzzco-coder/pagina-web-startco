# Registros de Bionda y Mora

Hoja independiente creada en Google Drive:
https://docs.google.com/spreadsheets/d/1m_qaB5qF6h0iYXBjmFNyJGxGsLeKoRRkeeylEF_Xv7k/edit

Pestaña: `Registros`. La hoja de Nuna no se modifica ni se utiliza como destino de Bionda.

## Activar la conexión

1. Abre Extensiones > Apps Script desde la hoja nueva.
2. Usa el código de `docs/bionda-gift-leads.gs`.
3. Implementa como aplicación web, ejecutar como tu usuario y acceso para cualquier usuario.
4. Configura la URL `/exec` resultante en `BIONDA_SHEETS_WEBHOOK_URL`, tanto en `.env.local` como en Vercel.
5. Reinicia el servidor local y despliega el proyecto para cargar la variable nueva.
6. Envía un registro de prueba y confirma producto, premio y código en la hoja. Repite el mismo correo y verifica que no se duplica.

Sin esta variable, el formulario responde 503 y no permite girar: nunca envía registros a la hoja de Nuna como alternativa.

La URL facilitada ya está configurada localmente. La primera prueba mostró que la versión publicada no contiene `doPost`; hay que publicar el código receptor. La API exige una respuesta JSON `{ ok: true }` y rechaza las páginas de error de Google.

## Premios

Se conservan las probabilidades anteriores: 5% de descuento (10% de probabilidad), 10% (60%), 15% (25%) y pañoleta (5%). La asignación se realiza en el servidor y permanece estable por correo mientras no cambie la clave de cifrado.

Cupones suministrados por el cliente: RULETABIONDA5, RULETABIONDA10 y RULETABIONDA15. La elegibilidad, vigencia, límites y acumulación dependen de la configuración en Shopify. La pañoleta se coordina por WhatsApp; no se ha configurado un cupón para ese premio.

La estabilidad por correo no impide que alguien use correos distintos. No equivale a validación de identidad ni a protección antifraude completa.
