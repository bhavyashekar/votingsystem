/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule, BaseRequestOptions, ResponseOptions, Jsonp, Response } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { BrowserModule, By } from "@angular/platform-browser";
import { HeaderComponent } from './header.component';

let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let backend: MockBackend;

describe('header component', () =>
{
    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [BrowserModule, RouterTestingModule, HttpModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: 'BASE_URL', useValue: "http://localhost:51003" },
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() =>
    {
        expect(true).toEqual(true);
    }));
});