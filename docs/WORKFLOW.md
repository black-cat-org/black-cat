# Workflow de trabajo — Black Cat

Flujo acordado entre Gonzalo y Claude Code para avanzar sección por sección sobre [`PLAN.md`](./PLAN.md). Cada sección/sub-sección se cierra completando el ciclo entero antes de pasar a la siguiente.

## Pasos por sección

1. **Preguntas de planeación**
   Claude hace preguntas simples, concretas, puntuales y exhaustivas sobre la sección a trabajar.

2. **Respuestas del usuario**
   Gonzalo responde. Si surgen dudas o decisiones nuevas, se resuelven antes de seguir.

3. **Documentar contexto**
   Claude anota las decisiones tomadas en `PLAN.md` (o en un sub-doc dentro de `docs/` si la sección lo justifica, ej. `docs/identidad-visual.md`).

4. **Desglose de tareas**
   Claude convierte las decisiones en items atómicos y verificables dentro de la sub-sección correspondiente del `PLAN.md`, reemplazando los `(pendiente desglose)`.

5. **Informe + propuesta de implementación**
   Claude muestra qué archivos va a tocar y qué cambios concretos hará. Espera OK explícito.

6. **Ejecución**
   Claude implementa los cambios.

7. **Code review automatizado**
   Claude lanza el subagent `feature-dev:code-reviewer` sobre los cambios.

8. **Informe del code review**
   Claude reporta los hallazgos del reviewer (bugs, security, calidad, convenciones) al usuario.

9. **Resolver hallazgos**
   Claude resuelve **absolutamente todo** lo que el reviewer encontró. La sección no se cierra con deudas.

10. **Test manual**
    Gonzalo testea manualmente en el browser (golden path + casos borde + responsive).

11. **Decisión**
    - **Si todo OK** → marcar items hechos en `PLAN.md`, commit con prefijo correspondiente, pasar a siguiente sección.
    - **Si hay correcciones** → volver al paso 5 con la nueva propuesta.

## Reglas

- **No saltarse pasos.** Aunque el usuario diga "implementá directo", el code review post-implementación se hace siempre.
- **Una sección a la vez.** No mezclar secciones distintas en un mismo ciclo.
- **Diagnose → Propose → Wait → Implement** sigue aplicando dentro de cada paso (especialmente el 5 y el 9).
- **Commits al cerrar sección**, no al cerrar item individual (a menos que el usuario pida lo contrario).
- Si un hallazgo del code reviewer implica refactor grande o cambia el alcance, pausar y consultar antes de continuar.
- Las preguntas del paso 1 deben ser **agrupadas, numeradas y cortas** — Gonzalo responde por número.

## Documentos relacionados

- [`PLAN.md`](./PLAN.md) — backlog estructurado del sitio.
- [`../CLAUDE.md`](../CLAUDE.md) — convenciones técnicas y workflow de Claude Code.
