const modules520000 = import.meta.glob('@/pages/chartsModules/json/520000/*.json');

export async function importMaps(regionCode: string) {
    const maps: { [key: string]: any } = {};
    let modules = getFileMapModules(regionCode);
    for (const path in modules) {
        const module: any = await modules[path]();
        const fileName = path.split('/').pop()?.split('.')[0];
        if (fileName) {
            maps[fileName] = module.default;
        }
    }
    return maps;
}


export function getFileMapModules(regionCode: string) {
    let modules: { [key: string]: any } = {};
    switch (regionCode) {
        case '520000':
            modules = modules520000;
            break;
    }
    return modules
}