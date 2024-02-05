const modules520000 = import.meta.glob('@/pages/chartsModules/json/520000/*.json');


const maps: { [key: string]: any } = {};
export async function importMaps(regionCode: string) {
    let modules;
    switch (regionCode) {
        case '520000':
            modules = modules520000;
            break;
    }
    for (const path in modules) {
        const module: any = await modules[path]();
        const fileName = path.split('/').pop()?.split('.')[0];
        if (fileName) {
            maps[fileName] = module.default;
        }
    }
    return maps;
}
