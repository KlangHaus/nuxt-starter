## Hvad + hvorfor

<!-- Closes #N — required (Beslutning M, fra 2026-06-12) -->

## Tjekliste

- [ ] Issue linket (`Closes #N`)
- [ ] Tests added/updated
- [ ] Coverage holder baseline (branch, ikke line — se `QUALITY-GATES.md` L2)
- [ ] Typecheck/lint grøn lokalt (`pnpm lint && pnpm typecheck` / `golangci-lint run && go vet ./...`)
- [ ] Docs opdateret (hvis API/kontrakt ændret)
- [ ] Breaking change → changeset eller CHANGELOG-note
- [ ] Ingen secrets/keys i diff
- [ ] SAST/vuln-scan grøn (CI viser)
- [ ] Verificeret end-to-end i lokalt Tilt-stack (Beslutning P)

## Test plan

<!-- hvad blev verificeret, hvordan -->

## Risiko / rollback

<!-- hvad sker der hvis denne PR går galt; rollback-plan -->
