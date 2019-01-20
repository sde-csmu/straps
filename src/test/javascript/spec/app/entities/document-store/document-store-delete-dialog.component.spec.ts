/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PromalyV5TestModule } from '../../../test.module';
import { DocumentStoreDeleteDialogComponent } from 'app/entities/document-store/document-store-delete-dialog.component';
import { DocumentStoreService } from 'app/entities/document-store/document-store.service';

describe('Component Tests', () => {
    describe('DocumentStore Management Delete Component', () => {
        let comp: DocumentStoreDeleteDialogComponent;
        let fixture: ComponentFixture<DocumentStoreDeleteDialogComponent>;
        let service: DocumentStoreService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PromalyV5TestModule],
                declarations: [DocumentStoreDeleteDialogComponent]
            })
                .overrideTemplate(DocumentStoreDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(DocumentStoreDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DocumentStoreService);
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
