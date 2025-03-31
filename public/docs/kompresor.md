# 🎚️ Kompresor audio – jak działa, jak go używać i kiedy warto

## 🧠 Co to jest kompresor?

Kompresor to „automatyczny regulator głośności”.  
Zmniejsza różnice między najcichszym a najgłośniejszym momentem sygnału.

> 📦 Dzięki niemu wokal nie „znika” w miksie i nie „wybucha” przy krzyku.

---

## 🛠️ Parametry kompresora – co robią?

| Parametr     | Co robi | Wartość typowa | Co się stanie, gdy... |
|--------------|---------|----------------|------------------------|
| **Threshold** | Poziom, od którego kompresor zaczyna działać | -20 dB do -10 dB | 🎚️ niżej = działa częściej |
| **Ratio**     | Ile kompresuje powyżej threshold | 2:1 do 4:1 | 📉 więcej = mocniejsze ścinanie |
| **Attack**    | Czas zanim kompresor „złapie” sygnał | 5–30 ms | 🥁 szybciej = mniej transientu |
| **Release**   | Czas powrotu kompresora do „0” | 50–300 ms | 🧃 wolniej = płynniejsze działanie |
| **Make-up gain** | Głośność po kompresji | ręcznie lub auto | 🔊 podbija ogólny poziom |

---

---

## 🧠 Jak zrozumieć wartości Threshold, Attack i Release?

### 📉 **Threshold (próg działania kompresora)**

- To poziom (w dB), **od którego kompresor zaczyna działać**
- Wartości są **ujemne** – np. `-10 dB`, `-20 dB`, `-30 dB`

#### 🧠 Jak myśleć:

| Wartość | Co oznacza | Praktyka |
|---------|------------|----------|
| `-30 dB` | Bardzo czuły | Kompresor działa niemal zawsze, nawet na cichym |
| `-20 dB` | Średni | Typowo używane na wokalu, reaguje tylko na głośniejsze |
| `-10 dB` | Mało czuły | Tylko głośne krzyki wchodzą w kompresję |
| `0 dB`   | Brak działania | Kompresor jest wyłączony praktycznie |

> 🔧 Im **niższy próg (bardziej ujemny)**, tym **częściej** kompresor „łapie” sygnał.

---

### ⏱️ **Attack (czas reakcji)**

- Ile milisekund kompresor czeka **zanim zacznie działać**
- Podawany w **ms (np. 3 ms, 10 ms, 50 ms)**

#### 🧠 Jak myśleć:

| Wartość | Efekt | Kiedy użyć |
|---------|-------|------------|
| `1–5 ms` | Bardzo szybki | Tnie wszystkie szczyty, np. **bas, cajon** |
| `10–20 ms` | Średni | Zachowuje początek (np. **gitara, wokal**) |
| `30 ms+` | Powolny | Zostawia atak, tylko „wygładza” ogółem |

> 🔧 **Szybszy attack = więcej kontroli, mniej „pazura”**  
> 🥁 Zbyt szybki na wokalu = może zabić dynamikę i emocje

---

### 🔁 **Release (czas puszczenia kompresji)**

- Ile milisekund kompresor trzyma „ściśnięcie” zanim wróci do normalnego poziomu

#### 🧠 Jak myśleć:

| Wartość | Efekt | Kiedy użyć |
|---------|-------|------------|
| `50–100 ms` | Krótkie | Naturalne, szybkie oddychanie |
| `200–300 ms` | Dłuższe | Płynne, może „zlewać się” |
| `500 ms+` | Długie | Ryzyko, że kolejna nuta nie zdąży się odbudować |

> 🔧 Za krótki = pompowanie, za długi = miks robi się „zamazany”

---

### 🧠 TL;DR – intuicyjny skrót

- **Threshold**:
    - **-30 dB** = bardzo czuły (łapie wszystko)
    - **-10 dB** = leniwy (tylko najgłośniejsze rzeczy)

- **Attack**:
    - **3 ms** = ścina natychmiast (używaj ostrożnie)
    - **15 ms** = naturalna reakcja (np. wokal)
    - **30 ms+** = zostawia „uderzenie”

- **Release**:
    - **100 ms** = szybko puszcza (bez pompy)
    - **300 ms** = naturalny flow
    - **500 ms+** = ciągnie się (uwaga na zlewanie)

---



## 🎯 Co daje kompresor?

- ✅ Stabilizuje **wokal** – szept i krzyk mają podobny poziom
- ✅ Podkreśla **ataki** (np. uderzenie struny, klik cajonu)
- ✅ „Usadza” dźwięk w miksie – mniej pływa
- ✅ Ułatwia słuchanie transmisji (brak nagłych skoków)

---

## 🔥 Co może zepsuć?

- ❌ Za mocny threshold = „ścięty”, martwy dźwięk
- ❌ Za długi release = sygnał nie wraca na czas
- ❌ Zbyt wysokie ratio = efekt radia/tuby
- ❌ Za szybki attack = brak transientu (uderzenia, klików)

---

## 🧪 Typowe ustawienia (X32 / live)

| Źródło        | Threshold | Ratio | Attack | Release | Uwagi |
|---------------|-----------|-------|--------|---------|-------|
| 🎤 Wokal lead | -18 dB    | 3:1   | 10 ms  | 150 ms  | Daje kontrolę, ale zostawia emocje |
| 👥 Chórki      | -20 dB    | 2:1   | 15 ms  | 200 ms  | Miękko, bez wybijania się |
| 🎸 Gitara     | -15 dB    | 4:1   | 5 ms   | 100 ms  | Podkreśla atak i wyrównuje |
| 🎹 Piano      | -12 dB    | 2:1   | 20 ms  | 200 ms  | Niech brzmi naturalnie |
| 🥁 Cajon      | -10 dB    | 4:1   | 3 ms   | 100 ms  | Zatrzymaj dudnienie, zostaw klik |
| 🎸 Bas        | -10 dB    | 5:1   | 15 ms  | 200 ms  | Trzyma dół w ryzach |

---

## 🎛️ Kiedy warto użyć kompresora?

✅ Użyj, gdy:

- 🎤 Wokal jest **raz za cicho, raz za głośno**
- 🎸 Gitara raz przebija się, raz znika
- 🥁 Cajon dominuje miks bez kontroli
- 🎧 Na transmisji pojawiają się skoki głośności

---

## 🚫 Kiedy NIE używać kompresora?

❌ Nie używaj, gdy:

- Sygnał jest stabilny i nie ma skoków
- Źródło ma już własną kompresję (np. klawisz, gitara z efektem)
- Nie potrafisz jeszcze wyczuć działania → lepiej **nie dotykać**, niż popsuć

---

## 🔍 Jak sprawdzić, czy działa?

- W X32 patrz na **Gain Reduction (GR)** – powinno działać **delikatnie**, 3–6 dB
- Włącz/wyłącz i **porównaj brzmienie**
- Słuchaj **czy atak nadal jest obecny**, a nie wszystko przytępione

---

## 📦 Tipy końcowe:

- 🎧 Zawsze słuchaj w kontekście miksu – nie solo!
- 🧼 Kompresor NIE ZASTĘPUJE korekcji (EQ)
- 🔁 Testuj na próbie – nie zmieniaj nic na żywo, jeśli nie musisz

---

