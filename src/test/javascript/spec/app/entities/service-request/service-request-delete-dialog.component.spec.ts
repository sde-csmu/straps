/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PromalyV5TestModule } from '../../../test.module';
import { ServiceRequestDeleteDialogComponent } from 'app/entities/service-request/service-request-delete-dialog.component';
import { ServiceRequestService } from 'app/entities/service-request/service-request.service';

describe('Component Tests', () => {
    describe('ServiceRequest Management Delete Component', () => {
        let comp: ServiceRequestDeleteDialogComponent;
        let fixture: ComponentFixture<ServiceRequestDeleteDialogComponent>;
        let service: ServiceRequestService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PromalyV5TestModule],
                declarations: [ServiceRequestDeleteDialogComponent]
            })
                .overrideTemplate(ServiceRequestDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ServiceRequestDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ServiceRequestService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
