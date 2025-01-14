/*
 * *****************************************************************************
 * Copyright (C) 2019-2022 Chrystian Huot <chrystian.huot@saubeo.solutions>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 * ****************************************************************************
 */

import { NgModule } from '@angular/core';
import { FreeScannerModule } from '../../components/freescanner';
import { AppSharedModule } from '../../shared/shared.module';
import { FreeScannerPageComponent } from './freescanner.component';
import { FreeScannerMainPageComponent } from './freescanner-main.component';
import { routes } from './freescanner.routes';

@NgModule({
    declarations: [
        FreeScannerPageComponent,
        FreeScannerMainPageComponent,
    ],
    exports: [FreeScannerPageComponent],
    imports: [
        FreeScannerModule,
        AppSharedModule.forChild({routerRoutes: routes }),
    ],
})
export class FreeScannerPageModule { }
