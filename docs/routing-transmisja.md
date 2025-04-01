# 🎥 Nasza konfiguracja transmisji w Behringer X32

## 🔧 Założenia systemu

- Mamy 2 kolumny frontowe na sali
- Transmisja online realizowana przez OBS
- Komputer odbiera dźwięk przez **CARD OUT 15/16**
- Chcemy mieć **osobny miks do transmisji**, niezależny od tego, co słyszy sala

---

## 🧱 Schemat miksu

```
🎚️ Kanały wejściowe (wokale, gitara, piano, cajon...) 
       ↓
🚌 BUS 1 & 2 (linked) → dedykowany miks pod transmisję
       ↓
🔷 MATRIX 3 & 4 (linked) → miks końcowy transmisji
       ↓
💻 CARD OUT 15 & 16 → komputer / OBS
```

---

## 🎯 Dlaczego taka konfiguracja?

- 🎧 Można ustawić inne poziomy (np. więcej cajonu niż na sali)
- 🎙️ Można dodać reverb tylko do transmisji
- 🔇 Nie wpływa to na głośniki na sali (tam idzie tylko LR)
- 🛠️ Matrix pozwala na EQ, kompresję, pogłos i niezależną głośność
- 🔄 **Zamiast wysyłać BUS 1/2 bezpośrednio na CARD**, korzystamy z Matrixa — **zyskujemy elastyczność**: w przyszłości możemy dodać tam inne BUS-y (np. FX, AUX, nagrania), ustawić dodatkowy pogłos, limiter, lub miks specjalny dla transmisji

---

## 📋 Routing krok po kroku

1. **BUS 1 i 2** – robisz miks pod transmisję (np. inne poziomy wokali, więcej reverbów)
2. **Matrix 3 i 4**:
    - SELECT na Matrix 3 i 4
    - SENDS ON FADER
    - Wysyłasz tam tylko **BUS 1 i 2**
3. **Routing → CARD OUT**:
    - Slot 15 = Matrix 3
    - Slot 16 = Matrix 4
4. **OBS** – odbiera to jako stereo L/R (kanał 15 i 16 z X32)

---

## ✅ Podsumowanie:

| Element     | Co robi                | Słyszalne przez         |
|-------------|-------------------------|--------------------------|
| **LR**      | miks na żywo            | głośniki na sali         |
| **BUS 1/2** | miks do transmisji      | Matrix                   |
| **Matrix 3/4** | miks końcowy do OBS  | publiczność online       |
| **OUT 15/16** | fizyczne wyjścia      | sala                     |

---

## 💡 Dodatki (opcjonalnie)

- Można dodać EQ / kompresję / limiter na Matrixach
- Można osobno zlinkować Matrix 3/4 (jeśli transmisja stereo)
- Można stworzyć kopię tej konfiguracji jako osobną SCENĘ (backup)

> Dzięki temu transmisja brzmi dobrze i nie wpływa na odsłuch na sali 🎧
