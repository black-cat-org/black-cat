---
name: plan-progress
description: Lee docs/PLAN.md, cuenta items hechos vs pendientes por sección y reporta el progreso. Si se invoca con argumento "diff", compara contra HEAD y muestra solo los items que se marcaron como hechos en la sesión actual (lo que va a entrar al próximo commit). Usar al cierre de sesión, antes de un commit del PLAN.md, o cuando el usuario pregunte "cómo va el plan".
---

# plan-progress

Reporta el estado del backlog `docs/PLAN.md`.

## Modos

### Modo default (sin argumento): snapshot global

Producí una tabla con el estado actual:

```
# PLAN progress — snapshot

| Sección                          | Hecho | Pendiente | Total | %    |
| -------------------------------- | ----- | --------- | ----- | ---- |
| 0. Foundation / Cross-cutting    | 0     | 7         | 7     | 0%   |
| 1. Layout global                 | 2     | 8         | 10    | 20%  |
| 2. Home                          | 0     | 22        | 22    | 0%   |
| ...                              | ...   | ...       | ...   | ...  |
| **Total**                        | **N** | **M**     | **N+M** | **X%** |
```

Después listá las **secciones más pesadas pendientes** (top 3 por cantidad de items en `[ ]`), para sugerir prioridad.

### Modo `diff`: cambios desde el último commit

Si el usuario invoca `/plan-progress diff` (o pasa "diff" como argumento):

1. Correr `git diff HEAD docs/PLAN.md` (o `git diff HEAD~1 HEAD docs/PLAN.md` si ya está stageado/committed).
2. Filtrar las líneas que cambiaron de `- [ ]` a `- [x]`.
3. Listar solo esos items, agrupados por la sección donde aparecen.

Salida:

```
# PLAN progress — items marcados desde el último commit

## 1.2. Navigation
- Reemplazar emoji 🐈‍⬛ del logo por SVG real (Navigation.astro:19)
- Agregar focus visible a links del nav (Navigation.astro:30-37)

## 2.1. Hero
- Reemplazar gradiente from-purple-400 via-pink-400 to-blue-400 por la paleta definitiva (Hero.astro:30)

Total marcados: 3 items en 2 secciones.
```

## Implementación

Usá `Bash` para los conteos. Sugerencia de comandos (probados):

```bash
# Conteo por sección (rough)
awk '
  /^## [0-9]/ { sect=$0; done[sect]=0; pend[sect]=0 }
  /^- \[x\]/ { done[sect]++ }
  /^- \[ \]/ { pend[sect]++ }
  END { for (s in done) printf "%s|%d|%d\n", s, done[s], pend[s] }
' docs/PLAN.md
```

```bash
# Modo diff
git diff HEAD -- docs/PLAN.md | grep -E '^\+- \[x\]' | sed 's/^+- \[x\] //'
```

Si el repo no está limpio (hay cambios stageados), usá `git diff --cached` además de `git diff` para capturar todos los cambios.

## Reglas

- **No edites docs/PLAN.md**. Solo lo leés.
- Si `docs/PLAN.md` no existe, decílo y sugerí crearlo (no lo crees vos).
- Si el modo `diff` no encuentra ningún cambio, decílo claro: "Sin items marcados desde el último commit".
- Si encontrás items mal-formateados (ej. `[X]` en mayúscula, o `- [ x ]` con espacios), reportalos como warning al final.
