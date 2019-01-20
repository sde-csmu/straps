/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PromalyV5TestModule } from '../../../test.module';
import { WarrantyUpdateComponent } from 'app/entities/warranty/warranty-update.component';
import { WarrantyService } from 'app/entities/warranty/warranty.service';
import { Warranty } from 'app/shared/model/warranty.model';

describe('Component Tests', () => {
    describe('Warranty Management Update Component', () => {
        let comp: WarrantyUpdateComponent;
        let fixture: ComponentFixture<WarrantyUpdateComponent>;
        let service: WarrantyService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PromalyV5TestModule],
                declarations: [WarrantyUpdateComponent]
            })
                .overrideTemplate(WarrantyUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(WarrantyUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WarrantyService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Warranty(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.warranty = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Warranty();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.warranty = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
