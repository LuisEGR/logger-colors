# logger-colors

Utilidades para logs en NodeJs

## Subir a dependencia a Nexus:

Para esto hay que registrar estas 2 variables de entorno:

```bash
export NPM_NEXUS_PUBLISHER_EMAIL=admin@example.org
export NPM_NEXUS_PUBLISHER_AUTH=YWRtaW46YWRtaW4xMjM=
```
 
cambiando el correo y la autenticación de ser necesario, la autenticación esta dada por: base64(user:pass)

una vez hecho esto solo ejecutar:

Para subir al nexus de multiva:
```
npm run publish:nexus-mtv
```

para subirlo al nexus local:
```
npm run publish:nexus-local
```

