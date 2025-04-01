# 🧠 Co to są Matrixy w Behringer X32?

## 🔍 Proste wytłumaczenie
Matrix w mikserze to **dodatkowa szyna miksująca**, która **słucha innych miksów**, a nie bezpośrednio kanałów wejściowych.

W skrócie:
> **Matrix to "miks miksów"** 🎛️

---

## 🏗️ Jak działa Matrix w X32?

Na mikserze Behringer X32 mamy:
- 🎚️ **Kanały wejściowe** (np. mikrofony, gitara, piano itd.)
- 🚌 **Mix Buses (BUS 1–16)** – do wysyłek (monitory, efekty, transmisja)
- 🧱 **Matrixy (Matrix 1–6)** – słuchają BUS-ów lub L/R

---

## 🔁 Czego *nie* zrobi Matrix?

❌ **Nie możesz wysłać kanału wejściowego bezpośrednio na Matrix!**  
✔️ **Możesz wysłać tylko BUS-y lub L/R** (Main LR, Mono, inne Matrixy)

---

## 🧩 Przykład analogowy

Jeśli pracowałeś kiedyś na analogowym mikserze:
- BUS to jak grupa submaster
- MATRIX to jak osobna końcówka miksu – np. osobne głośniki w holu albo wyjście na kamerę

Matrix to **poziom wyżej** – miksujesz to, co już zostało zmiksowane

---

## 🎯 Do czego używa się Matrixów?

| Zastosowanie | Co daje? |
|--------------|---------|
| 🎥 Transmisja / OBS | Osobny miks online (z pogłosem, inną głośnością instrumentów) |
| 🏟️ Głośniki delay (tył sali) | Opóźnienie dźwięku (delay FX), osobny poziom |
| 🎧 Nagrania | Możesz ustawić własny miks na nagranie (z EQ i kompresją!) |
| 🧪 Testowanie | Możesz miksować bez ruszania LR |

---

## 📦 Co Matrix może mieć?

Matrix to pełnoprawny kanał:
- EQ ✅
- Kompresor ✅
- Tłumik ✅
- Pan ✅ (gdy zlinkowany lewo/prawo)
- Routing do fizycznych wyjść (XLR / CARD) ✅

---

## 🛠️ Jak stworzyć miks z Matrixa (przykład transmisji)

1. **BUS 1 i 2** – robisz osobny miks tylko pod transmisję (np. więcej cajonu)
2. **Matrix 3 i 4** – zbierają BUS 1 i 2
3. **Matrix 3 i 4** wysyłasz na CARD (np. kanał 15 i 16 → komputer)

Dzięki temu:
- możesz dodać pogłos **tylko do transmisji**
- możesz ustawić inną głośność
- nie psujesz miksu sali!

---

## 📋 Typowe pułapki:

| Błąd | Skutek |
|------|--------|
| Wysyłasz kanał bezpośrednio na Matrix (nie da się) | Brak dźwięku |
| Matrix zbiera nie tylko BUS 1–2, ale też np. BUS 3 | Wpadka – odsluch chórek leci do transmisji |
| Nie sprawdzasz SENDS ON FADER | Nie wiesz, co naprawdę leci do Matrixa |

---

## ✅ Jak sprawdzić co leci do Matrixa?

1. `SELECT` na Matrix 3 lub 4
2. Wciśnij `SENDS ON FADER`
3. Zobacz, które BUS-y mają podniesiony tłumik

---

## 🧠 Podsumowanie dla początkujących

- **Nie traktuj Matrixa jak BUS-a** – on nie zbiera kanałów!
- To **miks końcowy** dla osobnych zastosowań
- Jest świetny do transmisji, nagrań, nagłośnienia strefowego
- **To nie jest trudne – tylko trzeba zrozumieć, że to ostatni etap miksu**

Chcesz teraz zobaczyć naszą konfigurację Matrixów do transmisji? 👉 [Kliknij tutaj](./nasza-konfiguracja-transmisji.md)
