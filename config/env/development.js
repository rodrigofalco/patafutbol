'use strict';

module.exports = {
	db: 'mongodb://localhost/patafutbol-dev',
	app: {
		title: 'PataFutbol - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '990185577663453',
		clientSecret: process.env.FACEBOOK_SECRET || '8f84a524aa05de840ca244dc6b2690e7',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '990341586719-lk8091e37l1nutddn9gnvktgs5s4654o.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'Ndln728niguoi-UVYBDWpPsF',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
