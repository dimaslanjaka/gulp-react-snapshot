/// <reference types="node" />
import Bluebird from 'bluebird';
import { BinaryData, JSDOM } from 'jsdom';
import { FixChunksOptions } from './snapshot.types';
import pkgTempFile from './temp-package.json';
declare type pkgType = typeof pkgTempFile & {
    homepage: string;
};
export declare const pkgJson: pkgType;
export declare class Snapshot {
    links: Set<string>;
    scraping: boolean;
    /**
     * scrape url schedule list
     */
    schedule: Set<string>;
    /**
     * scraped url list
     */
    scraped: Set<string>;
    launchBrowser(): Promise<import("puppeteer").Browser>;
    /**
     * scrape url
     * @param url
     * @returns
     */
    scrape(url: string): Promise<string>;
    /**
     * fix create-react-app v1 and v2
     * @param html
     * @param options
     * @returns
     */
    fixCRA1(html: string | ArrayBuffer | DataView, options?: FixChunksOptions): Promise<string>;
    removeUnwantedHtml(html: string | ArrayBuffer | DataView): Promise<string>;
    removeDuplicateScript(html: string | ArrayBuffer | DataView): Promise<string>;
    fixInners(html: string | ArrayBuffer | DataView): Promise<string>;
    fixCdn(html: string | ArrayBuffer | DataView): Promise<string>;
    fixSeoFromHtml(html: string | Buffer | BinaryData): Promise<string>;
    setIdentifierFromHtml(html: string | ArrayBuffer | DataView | undefined): Promise<string>;
    serializeHtml(dom: JSDOM): Promise<string>;
    static isPathNonHtml(str: string): boolean;
    static isPathHasExt(str: string): boolean;
}
export declare function save(file: string, content: string): Bluebird<string>;
/**
 * Remove cwd
 * @param str
 * @returns
 */
export declare function workspace(str: string): string;
export {};
