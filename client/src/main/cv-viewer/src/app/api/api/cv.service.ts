/**
 * CV Viewer
 * CV Viewer.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: neilje123@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Cv } from '../model/cv';
import { CvPermissions } from '../model/cvPermissions';
import { CvSummary } from '../model/cvSummary';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CvService {

    protected basePath = 'https://www.cv-viewer.co.uk';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete CV by name
     * Delete a CV defined on the system by name
     * @param cvName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCvByName(cvName: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteCvByName(cvName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteCvByName(cvName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteCvByName(cvName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cvName === null || cvName === undefined) {
            throw new Error('Required parameter cvName was null or undefined when calling deleteCvByName.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<string>(`${this.basePath}/cv/${encodeURIComponent(String(cvName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all CV summaries
     * Get a summary for all CVs defined on the system
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCVSummaries(observe?: 'body', reportProgress?: boolean): Observable<Array<CvSummary>>;
    public getAllCVSummaries(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CvSummary>>>;
    public getAllCVSummaries(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CvSummary>>>;
    public getAllCVSummaries(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<CvSummary>>(`${this.basePath}/cv/getAllCVSummaries`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get CV by name
     * Get a CV defined on the system by name
     * @param cvName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCvByName(cvName: string, observe?: 'body', reportProgress?: boolean): Observable<Cv>;
    public getCvByName(cvName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Cv>>;
    public getCvByName(cvName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Cv>>;
    public getCvByName(cvName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cvName === null || cvName === undefined) {
            throw new Error('Required parameter cvName was null or undefined when calling getCvByName.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Cv>(`${this.basePath}/cv/${encodeURIComponent(String(cvName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get CV permissions by CV name
     * Get the CV permissions for a given CV name
     * @param cvName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCvPermissions(cvName: string, observe?: 'body', reportProgress?: boolean): Observable<CvPermissions>;
    public getCvPermissions(cvName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CvPermissions>>;
    public getCvPermissions(cvName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CvPermissions>>;
    public getCvPermissions(cvName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cvName === null || cvName === undefined) {
            throw new Error('Required parameter cvName was null or undefined when calling getCvPermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<CvPermissions>(`${this.basePath}/cv/permissions/${encodeURIComponent(String(cvName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the new CV template
     * Get the new CV template
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNewCvTemplate(observe?: 'body', reportProgress?: boolean): Observable<Cv>;
    public getNewCvTemplate(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Cv>>;
    public getNewCvTemplate(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Cv>>;
    public getNewCvTemplate(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Cv>(`${this.basePath}/cv/getNewCvTemplate`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Write or update a CV
     * Write or update a CV
     * @param cv 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCv(cv: Cv, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public postCv(cv: Cv, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public postCv(cv: Cv, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public postCv(cv: Cv, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cv === null || cv === undefined) {
            throw new Error('Required parameter cv was null or undefined when calling postCv.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<string>(`${this.basePath}/cv`,
            cv,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Write or update CV permissions
     * Write or update the CV permissions
     * @param cvPermissions 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCvPermissions(cvPermissions: CvPermissions, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public postCvPermissions(cvPermissions: CvPermissions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public postCvPermissions(cvPermissions: CvPermissions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public postCvPermissions(cvPermissions: CvPermissions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cvPermissions === null || cvPermissions === undefined) {
            throw new Error('Required parameter cvPermissions was null or undefined when calling postCvPermissions.');
        }

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<string>(`${this.basePath}/cv/permissions`,
            cvPermissions,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
