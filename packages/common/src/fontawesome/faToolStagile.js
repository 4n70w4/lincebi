import getFaUnicodeCharacter from './getUnicodeCharacter';

export const prefix = 'fac';
export const iconName = 'tool-stagile';
export const width = 1200;
export const height = 1200;
export const ligatures = [];
export const unicode = getFaUnicodeCharacter();
export const svgPathData =
	'm 166.01787,1200 c 29.89286,-48.16 58.82143,-97.0133 89.89286,-144.3733 2.78572,48.0533 0.48214,96.2667 1.23214,144.3733 l -91.125,0 z M 493.12502,746.93337 c 78.37501,-0.48 156.80358,-0.48 235.17858,0.0533 0.64286,150.98667 0.0536,302.02673 0.26786,453.01333 l -235.71429,0 c 0.21428,-150.9866 -0.375,-302.02666 0.26785,-453.06666 z M 997.23218,598.08003 C 1050.75,536.26669 1102.3393,472.58669 1156.3929,411.30669 c 14.4643,-1.28 29.0357,-0.58667 43.6071,-0.58667 l 0,789.27998 -235.71425,0 c -0.0536,-184.9066 0.0536,-369.8133 -0.0536,-554.7733 1.28571,-20.42667 20.83928,-32.64 33,-47.14667 z M 898.39289,217.12002 c 7.33929,-8.16 12.91072,-18.66667 22.44643,-24.53334 28.60714,-1.22666 57.375,-0.64 86.03568,-0.32 -0.2143,26.34667 2.0893,53.06667 -1.3393,79.14667 -9.74995,14.45334 -22.07138,27.04 -33.26781,40.37334 -70.92857,84.10667 -142.07143,168.05333 -213.16072,252.05334 -8.89285,11.41333 -19.44643,26.08 -35.625,25.86667 -89.35714,0.0533 -178.76786,0.0533 -268.12501,-0.0533 -10.60714,0.21334 -21.42857,-1.01333 -31.875,1.28 -121.66071,195.7333 -242.625,391.94664 -364.178574,587.7333 -4.232143,6.88 -7.928572,14.1333 -11.678572,21.3333 l -47.625000588955,0 0,-150.7733 C 4.9821564,1042.0267 10.071442,1034.9867 14.678585,1027.6267 126.64287,845.92004 239.62502,664.85336 351.48216,483.14669 c 4.60715,-8.16 14.67857,-10.93333 23.51786,-10.50667 102.64286,-0.96 205.39286,0.74667 308.03572,-0.85333 71.57143,-85.01333 143.57143,-169.76 215.35715,-254.66667 z M 867.85718,1.3411045e-5 l 332.14282,0 L 1200,298.66669 c -39.1071,0 -78.2678,-0.48 -117.375,-0.85334 -1.3928,-60 0.3215,-120.16 -0.75,-180.21334 -71.25,-0.8 -142.49996,0.16 -213.74997,-0.53333 -0.75,-38.986665 0,-78.026666 -0.26785,-117.066666588955 z m -867.857166588955,0 235.714286588955,0 0,458.666676588955 c -0.10714,12.58667 0.75,25.17334 -0.75,37.70667 -4.28571,10.61333 -10.92857,20 -16.92857,29.70667 C 144.91073,642.72003 73.821444,760.5867 1.3411045e-5,876.7467 l 0,-876.746686588955 z';
export const definition = {
	prefix: prefix,
	iconName: iconName,
	icon: [width, height, ligatures, unicode, svgPathData]
};

export { definition as faToolStagile };
