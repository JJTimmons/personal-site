"use strict";

const child_process = require("child_process");
const path = require("path");
const buildDir = path.resolve("./public");

console.log(buildDir);

child_process.exec(
	`aws s3 sync ${buildDir} s3://www.joshuatimmons.com --delete`,
	(error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		} else if (stdout) {
			child_process.exec(
				`aws cloudfront create-invalidation --distribution-id E1MRNWEDPJJGK --paths /index.html`,
				(errorcf, stdoutcf, stderrcf) => {
					console.log(`error-cf: ${error}`);
					console.log(`stdout-cf: ${stdoutcf}`);
					console.log(`stderr-cf: ${stderrcf}`);
				}
			);
		} else {
			console.log(`stderr: ${stderr}`);
		}
	}
);