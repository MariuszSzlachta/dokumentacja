# 🎤 Ustawienia mikrofonu wokalnego w X32 – praktyczny przewodnik

## ✅ Co jest kluczowe przy ustawianiu wokalu?

1. **Gain** – właściwy poziom wejściowy (bez przesterów, ale wystarczająco mocno)
2. **HPF / LPF** – filtrowanie niepotrzebnych częstotliwości
3. **EQ** – kształtowanie barwy (korekty, nie efekty)
4. **Kompresor** – kontrola dynamiki (nie za dużo!)
5. **Sends** – odpowiednie wysyłki (np. reverb, transmisja)
6. **Balans w miksie** – wokal ma być czytelny i nie ginąć

---

## 🎙️ Gain – poziom wejściowy

- Wejdź w zakładkę **Config → Preamp**
- Ustaw gain tak, aby:
    - podczas mówienia/śpiewu na głośno **sygnał sięgał -12 do -6 dBFS**
    - **nie świecił się clip** ani nie był stale w czerwonym

---

## 📏 Filtry górno- i dolnozaporowe (HPF i LPF)

| Filtr         | Zakres dla wokalu | Po co?                            |
|---------------|--------------------|------------------------------------|
| **HPF** (High Pass) | 80–120 Hz (M), 100–150 Hz (K) | Usuwa buczenie, stuki, podbicia z mikrofonu lub sceny |
| **LPF** (Low Pass)  | zwykle NIE używamy | Chyba że celowo chcesz „zamulić” głos (efekt specjalny) |

---

## 🎚️ EQ – kształtowanie barwy

### 🧭 Ogólne pasma (orientacyjne)

| Zakres       | Co tam jest?                 | Kiedy ruszać?                        |
|--------------|------------------------------|--------------------------------------|
| 80–150 Hz    | Dół, pełnia, „ciało”         | Można dodać mężczyźnie, ująć kobiecie |
| 200–400 Hz   | Mętność, nosowość, pudło     | Wycinać w razie „kartonowego” brzmienia |
| 500–800 Hz   | „Telefon”, „nos”, pudełko    | Ostrożnie wycinać, często źródło problemów |
| 1–3 kHz      | Przebicie się przez miks     | Uważać – łatwo zrobić krzykliwy dźwięk |
| 4–8 kHz      | Jasność, syczenie, atak głosek | **Tu są syczące „s”, „sz” – uwaga!** |
| 10–15 kHz    | Powietrze, oddech, przestrzeń | Można dodać lekko, by „otworzyć” wokal |

---

## 👄 Syczenie („s”, „sz”) – bez de-essera

- Główne pasmo syczenia: **4.5 – 8 kHz**
- U kobiet często wyżej (**5.5 – 8.5 kHz**), u mężczyzn niżej (**4 – 6.5 kHz**)
- **Znajdź dokładne pasmo**:
    1. Włącz wąskie Q (np. 8–10)
    2. Przesuń pasmo, aż znajdziesz najbardziej syczące miejsce
    3. **Delikatnie obetnij** (–2 do –4 dB)
    4. Zmień Q na średnie (~5), by było naturalniej

> 🎯 Jeśli potrzeba mocniejszej redukcji: zamiast jeszcze niżej ciąć, **lekko poszerz** zakres

---

## 🧠 Wąskie vs szerokie korekty

| Rodzaj wycięcia | Kiedy stosować?                     | Efekt |
|-----------------|-------------------------------------|--------|
| **Wąskie (Q 7–10)** | Usuwanie precyzyjnych problemów (np. syczenie, rezonans) | Precyzyjna ingerencja, naturalne brzmienie |
| **Szerokie (Q 2–5)** | Kształtowanie ogólnego charakteru głosu | Bardziej słyszalna zmiana, ryzyko sztuczności jeśli przesadzisz |

---

## 👩‍🎤 Przykładowe ustawienia dla wokalu kobiecego

- **HPF:** 110–150 Hz
- **EQ:**
    - –2 dB przy 300 Hz (mętność)
    - +2 dB przy 3.5 kHz (czytelność)
    - –3 dB przy 6.5 kHz (syczenie)
- **Compressor:** ratio 2.5:1, threshold –18 dB, attack 10ms, release 100ms

---

## 👨‍🎤 Przykładowe ustawienia dla wokalu męskiego

- **HPF:** 80–100 Hz
- **EQ:**
    - –2 dB przy 250 Hz (nosowość)
    - +2 dB przy 2.5 kHz (przebicie się przez miks)
    - –3 dB przy 5.5 kHz (syczenie)
- **Compressor:** ratio 3:1, threshold –16 dB, attack 8ms, release 80ms

---

## 🎯 Dobre praktyki

- Zacznij od **filtrów**, potem **EQ**, potem **kompresor**
- Zawsze **słuchaj zmian w miksie**, nie solo
- Używaj **małych korekt**, jeśli robisz dużo – coś może być nie tak z mikrofonem lub ustawieniem
- Testuj głos na pełnym paśmie – ludzie mówią i śpiewają inaczej