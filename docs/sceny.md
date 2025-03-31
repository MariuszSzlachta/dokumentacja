# 🎬 Sceny w Behringer X32 — wszystko, co musisz wiedzieć

## 🧠 Co to są sceny?

Sceny (ang. *Scenes*) to zestawy zapisanych ustawień miksera X32.  
Pozwalają **zapisać i przywrócić stan miksera** dla różnych sytuacji — np. nabożeństwo, próba, koncert.

> ✅ Scena = snapshot całej (lub częściowej) konfiguracji X32

---

## 📦 Co zawiera scena?

Zależnie od ustawień filtrów (omówione dalej), scena może zawierać:

- 🎚️ Pozycje faderów (kanały, bus-y, LR)
- 🎛️ EQ, kompresory, bramki, insert FX
- 🧠 Routing (wejścia/wyjścia, patchowanie)
- 🎤 Preampy (gain, phantom)
- 🔈 Nazwy kanałów, kolory
- 📦 Efekty (FX Rack, FX send/return)
- 🎭 DCA, mute groupy
- 🔄 Połączenia z kartą (CARD), USB, AES50, Ultranet

---

## 🛑 Co **nie** zapisuje się w scenie domyślnie?

Jeśli **nie odznaczysz odpowiednich filtrów** – scena **nie zapisze** np.:

- patchowania wejść/wyjść (routing)
- gainów / preampów
- ustawień sieci
- konfiguracji osc
- ustawień użytkownika (np. `user assign`)

➡️ **Zawsze przed zapisem wybierz, co ma się zapisać** (Scene → View → Tab: `Param Safe`, `Channel Safe`, `Recall Scope`)

---

## 💾 Jak zapisać scenę na mikserze?

1. Wejdź w `SCENES`
2. Naciśnij `View`
3. W zakładce `Scenes` wybierz wolny slot (1–100)
4. Naciśnij `SAVE` (przycisk fizyczny)
5. Nadaj nazwę i zatwierdź

📌 Możesz też nadpisać istniejącą scenę.

---

## ⬅️ Jak wczytać scenę?

1. `SCENES` → `View`
2. Wybierz scenę
3. Naciśnij `RECALL`

> 🧠 Uwaga: Wczytanie sceny **zastępuje bieżące ustawienia** — jeśli nie chcesz stracić czegoś ważnego, zrób backup!

---

## 🧰 Jak zrobić backup scen na pendrive?

1. Włóż pendrive do portu USB z przodu miksera
2. Przejdź: `SETUP` → zakładka `GLOBAL`
3. Naciśnij: `Export Scenes to USB`
4. Wybierz: `Scenes`, `Show`, `Library` lub `All`

📁 Pliki zostaną zapisane w katalogach:

```
\X32\SCENES
\X32\SHOWS
\X32\LIBRARY
```


---

## 🔄 Jak przywrócić sceny z pendrive?

1. `SETUP` → zakładka `GLOBAL`
2. Włóż pendrive
3. Wybierz: `Import from USB`
4. Wybierz kategorię (Scenes, Show, Library)
5. Potwierdź i gotowe

> 📌 Możesz też importować tylko wybrane sceny lub całą strukturę.

---

## 🧠 Dodatkowe wskazówki

- Stosuj **SHOWS** jako zbiory scen do danego wydarzenia
- Backupuj na pendrive regularnie (np. raz w tygodniu)
- Używaj nazw typu `2025-04-07_Nabozenstwo`, `Próba_zespół`

---

---

## 🔁 Scene vs Snapshot — jaka jest różnica?

| Funkcja       | Scene                         | Snapshot                    |
|---------------|-------------------------------|-----------------------------|
| 📦 Zawartość   | Zapisuje cały mikser (lub wg filtrów) | Zapisuje tylko wybrane kanały |
| 🧠 Przeznaczenie | Zmiana całej konfiguracji       | Szybka zmiana ustawień w trakcie |
| 🎯 Typowy użytek | Inny zespół / nabożeństwo        | Inna barwa gitary / wokalu itp. |
| 🔄 Przejście  | Trwałe (pełne przeładowanie)   | Natychmiastowe              |

> 💡 **Snapshot** to raczej preset danej sceny. **Scena** to zapis całości pracy miksera.

---

## 🧪 Param Safe, Channel Safe, Recall Scope — jak to działa?

### 🔒 `Param Safe`

Chroni konkretne parametry, niezależnie od kanału.  
Przykład: chcesz, aby **kompresor** nigdy nie był nadpisywany → zaznacz `Dynamics`.

| Dostępne opcje:      |
|----------------------|
| Fader                |
| Mute                 |
| Pan                  |
| EQ                   |
| Dynamics (kompresor/bramka) |
| Preamp (gain, phantom) |
| Sends, Inserts, FX   |

---

### 🔒 `Channel Safe`

Chroni **całe kanały** — np. mikrofon pastora.  
Zaznaczone kanały **nie zostaną zmienione** przy wczytaniu sceny.

---

### 🧩 `Recall Scope`

Definiuje, **co w ogóle ma się zapisać i wczytać** przy scenie.

| Przykłady:                 |
|----------------------------|
| Routing                    |
| FX                        |
| DCA, Mute Groups           |
| Config (patching, metering) |
| Monitor (solo/mute/phones) |

> 💡 Dzięki tym 3 opcjom możesz mieć **pełną kontrolę** nad tym, co się dzieje przy `RECALL`.

---

## ⚙️ Jak ustawić automatyczne ładowanie sceny przy starcie miksera?

1. Wejdź w `SETUP` → zakładka `CONFIG`
2. W sekcji `Power On Scene`:
    - Wybierz numer sceny, która ma się załadować automatycznie
    - Zatwierdź przyciskiem `Encoder` lub `Select`
3. Zrestartuj mikser, aby sprawdzić

> 🧠 Idealne, jeśli chcesz mieć zawsze domyślny stan startowy dla danej sali / kościoła.

---

