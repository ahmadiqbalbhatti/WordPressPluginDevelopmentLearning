import {registerBlockType} from '@wordpress/blocks';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import './main.css';

import block from './block.json'

registerBlockType(block.name, {
    edit(props) {
        // const {content} = attributes;
        const {content} = props.attributes;
        const blockProps = useBlockProps({
            className: 'fancy-header'
        });
        // console.log(blockProps)
        return <RichText
            {...blockProps}
            tagName="h2"
            placeholder={__('Enter Heading', 'udemy-plus')}
            value={content}
            onChange={(newValue) => props.setAttributes({content: newValue})}
        />
    },
    save({attributes}) {
        const {content} = attributes;

        const blockProps = useBlockProps.save({
            className: 'fancy-header'
        });

        return (<RichText.Content
            {...blockProps}
            tagName={"h2"}
            value={content}
        />)
    }
});