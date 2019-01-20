/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PromalyV5TestModule } from '../../../test.module';
import { ExpenseDetailComponent } from 'app/entities/expense/expense-detail.component';
import { Expense } from 'app/shared/model/expense.model';

describe('Component Tests', () => {
    describe('Expense Management Detail Component', () => {
        let comp: ExpenseDetailComponent;
        let fixture: ComponentFixture<ExpenseDetailComponent>;
        const route = ({ data: of({ expense: new Expense(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [PromalyV5TestModule],
                declarations: [ExpenseDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ExpenseDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ExpenseDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.expense).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
