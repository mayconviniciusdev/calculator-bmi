export type Weight = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number; }

export const weights: Weight[] = [
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.4]},
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9]},
    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 29.9]},
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30, 99]} ];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in weights) {
        if(imc >= weights[i].imc[0] && imc < weights[i].imc[1]) {
            let weightCopy: Weight = {...weights[i]};

            weightCopy.yourImc = parseFloat(imc.toFixed(2));
            return weightCopy} }

        return null; }