function hospital(input) {
    let term = Number(input[0]);

    let doctors = 7;


    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i < term + 1; i++) {
        let countPatients = Number(input[i]);
        if (i % 3 === 0) {
            if (treatedPatients < untreatedPatients) {
                doctors++;
            }
        }
        if (countPatients >= doctors) {
            treatedPatients += doctors;
            untreatedPatients += countPatients - doctors;

        } else {
            treatedPatients += countPatients;
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
