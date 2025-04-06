# Equalizer (EQ) – kompendium wiedzy

Equalizer w mikserze X32 pozwala kształtować brzmienie sygnału audio na różnych etapach – na kanałach, busach, matrixach i sumie głównej. Poniżej omówione zostały tryby korekcji dostępne na mikserze, ich zastosowania oraz praktyczne wskazówki do wykorzystania w pracy.

---

## Tryby korekcji EQ

| Tryb (skrót) | Pełna nazwa         | Opis działania                                                                 |
|-------------|----------------------|--------------------------------------------------------------------------------|
| **HCUT**    | High Cut             | Górnoprzepustowy filtr, odcina wysokie częstotliwości.                         |
| **HSHV**    | High Shelf           | Zmienia poziom wszystkich częstotliwości powyżej punktu ustawienia.           |
| **VEQ**     | Vintage Equalizer    | Stylizowany na klasyczne korektory analogowe (brzmienie retro).               |
| **PEQ**     | Parametric EQ        | Korektor parametryczny – pełna kontrola nad częstotliwością, Q i gainem.     |
| **LSHV**    | Low Shelf            | Zmienia poziom wszystkich częstotliwości poniżej punktu ustawienia.           |
| **LCUT**    | Low Cut              | Dolnoprzepustowy filtr, odcina niskie częstotliwości.                         |

---

## Kiedy używać poszczególnych trybów?

### Mikrofony wokalne:
- **LCUT (Low Cut)** – niemal zawsze, np. od ~80 Hz (usuwanie dudnienia i szumów z ręki/stopy).
- **PEQ** – do kształtowania barwy (np. lekkie wycięcie przy ~250 Hz – "pudło", podbicie przy 3–5 kHz – wyrazistość).
- **VEQ** – jeśli zależy nam na cieplejszym, analogowym charakterze (np. wokal solowy).

### Instrumenty:
- **PEQ** – precyzyjna korekcja np. rezonansów w gitarze, podbicie harmonicznych w basie.
- **HSHV / LSHV** – ogólne ocieplenie lub rozjaśnienie sygnału.

### Bus / sumy:
- **HSHV / LSHV** – szybkie korekty całego miksu (np. wzmocnienie wysokich na transmisji).
- **HCUT / LCUT** – do ograniczenia pasma np. na subwoofery, monitorowe busy, itp.

---

## Parametry korektora – jak ustawić?

| Parametr      | Znaczenie                                                               | Co daje „więcej” / „mniej”?                                    |
|---------------|-------------------------------------------------------------------------|-----------------------------------------------------------------|
| **Gain**      | Wzmocnienie lub wycięcie pasma.                                          | Więcej = mocniejsze podbicie/wycięcie danego pasma.            |
| **Freq**      | Częstotliwość środkowa korekcji.                                         | Zmieniamy zakres, który jest edytowany.                        |
| **Q (szerokość)** | Jak szeroko wpływa korekta na sąsiednie częstotliwości.                 | Niższe Q = szerzej; wyższe Q = precyzyjnie, wąsko.              |

### Praktyczne wskazówki:
- Wokale: **Low Cut** od 80–120 Hz, **Boost** 3–5 kHz.
- Gitary: **Wycięcie** 250–350 Hz (mętność), **Boost** 2 kHz (czytelność).
- Cajon: **Boost** 80 Hz (stopa), **Wycięcie** 400 Hz (karton), **Boost** 4–6 kHz (góra).

---

## Warto wiedzieć:
- Na kanale mamy **4 pasma PEQ** + **Low Cut** + **High Cut**.
- Na busach i matrixach EQ jest równie ważny – np. do kształtowania odsłuchów.
- Dla początkujących – lepiej **wycinać niż podbijać** (usuwać brudy niż dodawać "piękno").
- Słuchaj, nie patrz – oczy mogą mylić, ale uszy nie.


## 🎧 Miksowanie kanałów – solo czy w miksie?

Poniżej opisany jest standardowy workflow używany przez profesjonalnych realizatorów. Korekcję wykonujemy w **dwóch etapach** – najpierw w **solo**, a następnie **w miksie**, aby dopracować brzmienie w kontekście całego zespołu.

---

### 🛠 Etap 1: Solo — *chirurgiczne czyszczenie*
✅ **Cel:** usunięcie niechcianych dźwięków, rezonansów i śmieci z kanału.

**Co robimy w solo?**
- 🔍 Lokalizujemy **brum**, **bzyczenie**, **szumy**, **rezonanse**.
- 🔪 Włączamy **HPF** (Low Cut) – np. 80–120 Hz dla wokalu, żeby wyciąć „buczenie” z podłogi.
- 🎯 Używamy wąskiego **peaking EQ**, aby przesuwać się po paśmie i znaleźć rezonujące lub nieprzyjemne tony – po czym delikatnie je wycinamy.

🧠 **Uwaga:** Na tym etapie nie poprawiamy jeszcze charakteru brzmienia. Skupiamy się tylko na tym, co przeszkadza.

---

### 🎛 Etap 2: W miksie — *dopasowanie do całości*
✅ **Cel:** ułożyć kanał w miksie, tak by nie przeszkadzał innym źródłom i był słyszalny.

**Co robimy w miksie?**
- 🪞 Sprawdzamy **czy nie koliduje z innymi kanałami** – np. wokal z gitarą lub cajon z basem.
- ✂️ Odsuwamy instrumenty od siebie w pasmach – np. lekki *notch* 3 kHz na gitarze, żeby wokal był czytelniejszy.
- 📣 Delikatnie **podbijamy** te częstotliwości, które budują charakter instrumentu (np. 2 kHz wokal, 120 Hz cajon).

🧠 **Uwaga:** To nie chirurgia – to architektura brzmienia.

---

### 🔁 Podsumowanie workflow EQ:

| Krok | Słuchanie | Cel | Typ korekcji |
|------|-----------|-----|--------------|
| 1. Solo | Tylko dany kanał | Czyszczenie | Usuwanie dudnienia, brumu, szumów |
| 2. W miksie | Wszystkie kanały | Dopasowanie | Tworzenie przestrzeni, podbijanie charakteru |

---

### 💡 Tip pro tip:
- **Solo to lupa 🔍.** Miks to krajobraz 🧱.
- **Nigdy nie zostawiaj kanału po samym solo.** Zawsze sprawdź go ponownie w miksie.
- **Niektóre instrumenty solo brzmią źle, ale w miksie doskonale.**



