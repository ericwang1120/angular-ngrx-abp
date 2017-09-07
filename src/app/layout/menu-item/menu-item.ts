export class MenuItem {
    name: string = '';
    permissionName: string = '';
    icon: string = '';
    route: string = '';
    childItems: MenuItem[];

    constructor(name: string,
        permissionName: string, icon: string,
        route: string, childItems: MenuItem[] = null) {
        this.name = name;
        this.permissionName = permissionName;
        this.icon = icon;
        this.route = route;
        this.childItems = childItems;
    }
}
